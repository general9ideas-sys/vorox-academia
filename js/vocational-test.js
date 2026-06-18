/**
 * Test vocacional VOROX — preguntas progresivas que decantan hacia una carrera.
 */
window.VoroxVocationalTest = (function () {
  'use strict';

  var CAREERS = {
    'ai-engineering': {
      title: 'AI Engineering',
      duration: '2 meses · Part-time',
      description: 'Diseñá y desplegá sistemas de IA aplicada: modelos, agentes y pipelines inteligentes para producción.',
      url: '#inscripcion',
      cta: 'Quiero información',
      formValue: 'ai-engineering'
    },
    'full-stack': {
      title: 'Full Stack Development',
      duration: '4–8 meses · Full / Part-time',
      description: 'Construí aplicaciones web completas: frontend, backend, bases de datos y despliegue.',
      url: '#inscripcion',
      cta: 'Quiero información',
      formValue: 'full-stack'
    },
    'data-science': {
      title: 'Data Science',
      duration: '4–8 meses · Full / Part-time',
      description: 'Analizá datos, creá modelos de Machine Learning y comunicá hallazgos con impacto en el negocio.',
      url: 'data-science.html',
      cta: 'Ver carrera',
      formValue: 'data-science'
    },
    'data-engineering': {
      title: 'Data Engineering',
      duration: '8 meses · Part-time',
      description: 'Diseñá pipelines, warehouses y sistemas que mueven datos a gran escala.',
      url: '#inscripcion',
      cta: 'Quiero información',
      formValue: 'data-engineering'
    },
    'ai-automation': {
      title: 'AI Automation',
      duration: '2 meses · Part-time',
      description: 'Automatizá procesos con agentes, APIs y flujos de trabajo inteligentes.',
      url: '#inscripcion',
      cta: 'Quiero información',
      formValue: 'ai-automation'
    },
    'marketing': {
      title: 'Marketing Digital',
      duration: '3 meses · Part-time',
      description: 'Gestioná campañas, funnels y analítica web para hacer crecer marcas online.',
      url: '#inscripcion',
      cta: 'Quiero información',
      formValue: 'marketing'
    }
  };

  var QUESTIONS = [
    {
      id: 'area',
      text: '¿Qué área del mundo tech te atrae más?',
      hint: 'Empezá por lo que más te entusiasma — las siguientes preguntas afinan el resultado.',
      options: [
        { label: 'Crear apps, sitios y productos digitales', scores: { 'full-stack': 3 } },
        { label: 'Analizar datos y encontrar patrones', scores: { 'data-science': 3, 'data-engineering': 1 } },
        { label: 'Trabajar con inteligencia artificial', scores: { 'ai-engineering': 3, 'ai-automation': 2 } },
        { label: 'Hacer crecer negocios y campañas online', scores: { 'marketing': 3 } }
      ]
    },
    {
      id: 'project',
      text: '¿Qué proyecto te imaginarías construyendo?',
      hint: 'Pensá en el resultado final que te daría más satisfacción.',
      options: [
        { label: 'Una plataforma web que miles de personas usen', scores: { 'full-stack': 3 } },
        { label: 'Un modelo que predice ventas o comportamiento', scores: { 'data-science': 3 } },
        { label: 'Un sistema que procesa datos de toda una empresa', scores: { 'data-engineering': 3 } },
        { label: 'Un agente que automatiza tareas repetitivas', scores: { 'ai-automation': 3, 'ai-engineering': 1 } },
        { label: 'Una campaña que triplica conversiones', scores: { 'marketing': 3 } },
        { label: 'Un producto de IA listo para producción', scores: { 'ai-engineering': 3 } }
      ]
    },
    {
      id: 'tools',
      text: '¿Qué herramientas te gustaría dominar primero?',
      hint: 'No hace falta saberlas hoy — elegí por curiosidad.',
      options: [
        { label: 'React, Node.js y bases de datos', scores: { 'full-stack': 3 } },
        { label: 'Python, pandas y Machine Learning', scores: { 'data-science': 3 } },
        { label: 'SQL, Spark y arquitectura en la nube', scores: { 'data-engineering': 3 } },
        { label: 'LLMs, APIs de IA y despliegue de modelos', scores: { 'ai-engineering': 3 } },
        { label: 'Zapier, n8n y flujos automatizados', scores: { 'ai-automation': 3 } },
        { label: 'Google Ads, Meta Ads y analítica web', scores: { 'marketing': 3 } }
      ]
    },
    {
      id: 'style',
      text: '¿Cómo preferís trabajar día a día?',
      options: [
        { label: 'Resolviendo problemas de lógica y arquitectura', scores: { 'full-stack': 2, 'data-engineering': 2, 'ai-engineering': 1 } },
        { label: 'Explorando datos hasta encontrar insights', scores: { 'data-science': 3 } },
        { label: 'Optimizando procesos y eliminando tareas manuales', scores: { 'ai-automation': 3, 'data-engineering': 1 } },
        { label: 'Probando creatividad y estrategia con métricas', scores: { 'marketing': 3 } },
        { label: 'Experimentando con lo último en IA', scores: { 'ai-engineering': 3, 'ai-automation': 1 } }
      ]
    },
    {
      id: 'goal',
      text: '¿Cuál es tu objetivo principal con VOROX?',
      hint: 'Última pregunta — con esto definimos tu carrera ideal.',
      options: [
        { label: 'Conseguir mi primer empleo en tecnología', scores: { 'full-stack': 2, 'data-science': 2 } },
        { label: 'Especializarme en inteligencia artificial', scores: { 'ai-engineering': 3 } },
        { label: 'Ser el referente de datos en una empresa', scores: { 'data-science': 2, 'data-engineering': 2 } },
        { label: 'Automatizar y escalar operaciones con IA', scores: { 'ai-automation': 3 } },
        { label: 'Emprender o hacer freelancing digital', scores: { 'marketing': 2, 'full-stack': 1 } },
        { label: 'Cambiar de rubro con un programa corto', scores: { 'ai-engineering': 1, 'ai-automation': 2, 'marketing': 2 } }
      ]
    }
  ];

  var state = {
    step: 0,
    scores: {},
    answers: []
  };

  function resetScores() {
    state.scores = {};
    Object.keys(CAREERS).forEach(function (id) {
      state.scores[id] = 0;
    });
  }

  function addScores(optionScores) {
    Object.keys(optionScores).forEach(function (careerId) {
      state.scores[careerId] = (state.scores[careerId] || 0) + optionScores[careerId];
    });
  }

  function getWinner() {
    var best = null;
    var bestScore = -1;
    Object.keys(state.scores).forEach(function (id) {
      if (state.scores[id] > bestScore) {
        bestScore = state.scores[id];
        best = id;
      }
    });
    return best;
  }

  function getRunnerUp(winnerId) {
    var sorted = Object.keys(state.scores)
      .filter(function (id) { return id !== winnerId; })
      .sort(function (a, b) { return state.scores[b] - state.scores[a]; });
    return sorted[0] || null;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function prefillCareer(formValue) {
    var select = document.getElementById('carrera');
    if (select) select.value = formValue;
  }

  function renderIntro(root) {
    root.innerHTML =
      '<div class="vocational-test__intro">' +
        '<span class="section-tag">Test vocacional</span>' +
        '<h2>¿No sabés qué carrera elegir?</h2>' +
        '<p>Respondé <strong>' + QUESTIONS.length + ' preguntas</strong> y te vamos guiando paso a paso hacia la carrera VOROX que mejor encaja con vos.</p>' +
        '<button type="button" class="btn btn--cta btn--lg" id="vocationalStart">Comenzar test</button>' +
      '</div>' +
      '<div class="vocational-test__panel vocational-test__panel--preview" aria-hidden="true">' +
        '<div class="vocational__card-preview"><span>?</span><p>Tu camino ideal</p></div>' +
      '</div>';

    root.querySelector('#vocationalStart').addEventListener('click', function () {
      state.step = 0;
      state.answers = [];
      resetScores();
      renderQuestion(root);
    });
  }

  function renderQuestion(root) {
    var q = QUESTIONS[state.step];
    var total = QUESTIONS.length;
    var pct = Math.round((state.step / total) * 100);

    var html = '<div class="vocational-test__quiz">';
    html += '<div class="vocational-test__progress">';
    html += '<div class="vocational-test__progress-bar"><span style="width:' + pct + '%"></span></div>';
    html += '<p class="vocational-test__progress-text">Pregunta ' + (state.step + 1) + ' de ' + total + '</p>';
    html += '</div>';
    html += '<h3 class="vocational-test__question">' + escapeHtml(q.text) + '</h3>';
    if (q.hint) {
      html += '<p class="vocational-test__hint">' + escapeHtml(q.hint) + '</p>';
    }
    html += '<div class="vocational-test__options" role="listbox" aria-label="Opciones">';
    q.options.forEach(function (opt, i) {
      html += '<button type="button" class="vocational-test__option" data-option-index="' + i + '">';
      html += escapeHtml(opt.label);
      html += '</button>';
    });
    html += '</div>';
    if (state.step > 0) {
      html += '<button type="button" class="vocational-test__back" id="vocationalBack">← Pregunta anterior</button>';
    }
    html += '</div>';

    root.innerHTML = html;

    root.querySelectorAll('.vocational-test__option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-option-index'), 10);
        var option = q.options[idx];

        if (state.answers[state.step]) {
          var prev = state.answers[state.step];
          Object.keys(prev.scores).forEach(function (id) {
            state.scores[id] -= prev.scores[id];
          });
        }

        state.answers[state.step] = option;
        addScores(option.scores);

        btn.classList.add('is-selected');
        setTimeout(function () {
          state.step += 1;
          if (state.step >= QUESTIONS.length) {
            renderResult(root);
          } else {
            renderQuestion(root);
          }
        }, 280);
      });
    });

    var backBtn = root.querySelector('#vocationalBack');
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        if (state.step > 0) {
          var last = state.answers[state.step - 1];
          if (last) {
            Object.keys(last.scores).forEach(function (id) {
              state.scores[id] -= last.scores[id];
            });
            state.answers.pop();
          }
          state.step -= 1;
          renderQuestion(root);
        }
      });
    }
  }

  function renderResult(root) {
    var winnerId = getWinner();
    var runnerId = getRunnerUp(winnerId);
    var career = CAREERS[winnerId];
    var runner = runnerId ? CAREERS[runnerId] : null;

    var html = '<div class="vocational-test__result">';
    html += '<span class="vocational-test__result-tag">Tu carrera ideal</span>';
    html += '<h3>' + escapeHtml(career.title) + '</h3>';
    html += '<p class="vocational-test__result-duration">' + escapeHtml(career.duration) + '</p>';
    html += '<p class="vocational-test__result-desc">' + escapeHtml(career.description) + '</p>';
    html += '<div class="vocational-test__result-actions">';
    html += '<a href="' + escapeHtml(career.url) + '" class="btn btn--cta btn--lg" id="vocationalCta">' + escapeHtml(career.cta) + '</a>';
    html += '<button type="button" class="btn btn--outline-nav btn--lg" id="vocationalRetry">Hacer test de nuevo</button>';
    html += '</div>';
    if (runner) {
      html += '<p class="vocational-test__runner">También podría interesarte: <strong>' + escapeHtml(runner.title) + '</strong></p>';
    }
    html += '</div>';

    root.innerHTML = html;

    prefillCareer(career.formValue);

    root.querySelector('#vocationalCta').addEventListener('click', function (e) {
      if (career.url === '#inscripcion') {
        e.preventDefault();
        prefillCareer(career.formValue);
        document.getElementById('inscripcion')?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    root.querySelector('#vocationalRetry').addEventListener('click', function () {
      state.step = 0;
      state.answers = [];
      resetScores();
      renderIntro(root);
    });
  }

  function init(mountId) {
    var root = document.getElementById(mountId || 'vocationalTest');
    if (!root) return;
    resetScores();
    renderIntro(root);
  }

  return { init: init, CAREERS: CAREERS, QUESTIONS: QUESTIONS };
})();
