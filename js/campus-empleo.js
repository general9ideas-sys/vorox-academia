/**
 * VOROX Campus — empleo, CV y matching alumno ↔ empresa (localStorage).
 */
window.VoroxCampus = (function () {
  'use strict';

  var KEYS = {
    profile: 'vorox-campus-profile',
    company: 'vorox-campus-company',
    jobs: 'vorox-campus-jobs',
    applications: 'vorox-campus-applications'
  };

  var CAREERS = [
    { id: 'data-science', label: 'Data Science' },
    { id: 'full-stack', label: 'Full Stack Development' },
    { id: 'data-engineering', label: 'Data Engineering' },
    { id: 'ai-engineering', label: 'AI Engineering' },
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'marketing', label: 'Marketing Digital' }
  ];

  var SEED_JOBS = [
    {
      id: 'job-seed-1',
      companyName: 'TechNova AR',
      title: 'Data Scientist Junior',
      career: 'data-science',
      modality: 'Remoto',
      location: 'Argentina',
      description: 'Buscamos graduado VOROX con Python, ML y SQL. Proyecto de churn y reporting.',
      createdAt: '2026-05-01T10:00:00Z'
    },
    {
      id: 'job-seed-2',
      companyName: 'Scale Labs',
      title: 'Full Stack Developer',
      career: 'full-stack',
      modality: 'Híbrido',
      location: 'Buenos Aires',
      description: 'React + Node para producto SaaS. Certificación VOROX valorada.',
      createdAt: '2026-05-10T10:00:00Z'
    },
    {
      id: 'job-seed-3',
      companyName: 'DataFlow PY',
      title: 'Data Engineer',
      career: 'data-engineering',
      modality: 'Remoto',
      location: 'Paraguay / LATAM',
      description: 'Pipelines SQL y cloud. Egresados con proyecto final en portfolio.',
      createdAt: '2026-05-15T10:00:00Z'
    }
  ];

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function uid(prefix) {
    return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
  }

  function careerLabel(id) {
    var c = CAREERS.find(function (x) { return x.id === id; });
    return c ? c.label : id;
  }

  function ensureJobs() {
    var jobs = load(KEYS.jobs, null);
    if (!jobs || !jobs.length) {
      save(KEYS.jobs, SEED_JOBS);
      return SEED_JOBS;
    }
    return jobs;
  }

  function getProfile() { return load(KEYS.profile, null); }
  function getCompany() { return load(KEYS.company, null); }
  function getJobs() { return ensureJobs(); }
  function getApplications() { return load(KEYS.applications, []); }

  function saveProfile(data) {
    data.updatedAt = new Date().toISOString();
    save(KEYS.profile, data);
  }

  function saveCompany(data) {
    data.updatedAt = new Date().toISOString();
    save(KEYS.company, data);
  }

  function addJob(job) {
    var jobs = getJobs();
    job.id = uid('job');
    job.createdAt = new Date().toISOString();
    jobs.unshift(job);
    save(KEYS.jobs, jobs);
    return job;
  }

  function applyToJob(jobId) {
    var profile = getProfile();
    if (!profile || !profile.name || !profile.certificateId) {
      return { ok: false, error: 'Completá tu perfil y certificado VOROX antes de postularte.' };
    }
    var apps = getApplications();
    if (apps.some(function (a) { return a.jobId === jobId && a.profileEmail === profile.email; })) {
      return { ok: false, error: 'Ya te postulaste a esta oferta.' };
    }
    apps.unshift({
      id: uid('app'),
      jobId: jobId,
      profileEmail: profile.email,
      profileName: profile.name,
      career: profile.career,
      certificateId: profile.certificateId,
      cvSummary: profile.summary || '',
      status: 'pendiente',
      createdAt: new Date().toISOString()
    });
    save(KEYS.applications, apps);
    return { ok: true };
  }

  function matchScore(job, profile) {
    if (!profile) return 0;
    var score = 50;
    if (job.career === profile.career) score += 40;
    if (profile.certificateId) score += 10;
    return Math.min(score, 100);
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function $(id) { return document.getElementById(id); }

  var currentRole = null;
  var studentTab = 'perfil';

  function showHub() {
    currentRole = null;
    $('campusHub').hidden = false;
    $('campusStudent').hidden = true;
    $('campusCompany').hidden = true;
  }

  function showStudent() {
    currentRole = 'student';
    $('campusHub').hidden = true;
    $('campusStudent').hidden = false;
    $('campusCompany').hidden = true;
    renderStudent();
  }

  function showCompany() {
    currentRole = 'company';
    $('campusHub').hidden = true;
    $('campusStudent').hidden = true;
    $('campusCompany').hidden = false;
    renderCompany();
  }

  function renderStudent() {
    renderStudentTab(studentTab);
  }

  function renderStudentTab(tab) {
    studentTab = tab;
    document.querySelectorAll('[data-student-tab]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-student-tab') === tab);
    });

    var panel = $('campusStudentPanel');
    var profile = getProfile();
    var jobs = getJobs();
    var apps = getApplications();
    var html = '';

    if (tab === 'perfil') {
      html += '<div class="campus-split">';
      html += '<form class="campus-form" id="profileForm">';
      html += '<h3>Perfil profesional</h3>';
      html += field('Nombre completo', 'name', profile?.name, 'text', true);
      html += field('Email', 'email', profile?.email, 'email', true);
      html += selectField('Carrera VOROX', 'career', profile?.career, CAREERS);
      html += field('Nº certificado VOROX', 'certificateId', profile?.certificateId, 'text', true, 'Ej. VOROX-DS-2026-0042');
      html += field('LinkedIn / Portfolio', 'portfolio', profile?.portfolio, 'url', false);
      html += '<h4>Armá tu CV</h4>';
      html += textareaField('Resumen profesional', 'summary', profile?.summary, '2-3 líneas sobre tu perfil tech.');
      html += textareaField('Experiencia', 'experience', profile?.experience, 'Trabajos, proyectos o prácticas.');
      html += textareaField('Habilidades', 'skills', profile?.skills, 'Python, SQL, React, etc.');
      html += textareaField('Formación', 'education', profile?.education, 'Carrera VOROX, otros estudios.');
      html += '<button type="submit" class="btn btn--cta">Guardar perfil y CV</button>';
      html += '</form>';
      html += '<div class="campus-cv-preview" id="cvPreview">' + renderCvPreview(profile) + '</div>';
      html += '</div>';
    }

    if (tab === 'empleos') {
      var sorted = jobs.slice().sort(function (a, b) {
        return matchScore(b, profile) - matchScore(a, profile);
      });
      html += '<h3>Ofertas laborales</h3>';
      html += '<p class="campus-hint">Ordenadas por coincidencia con tu perfil y certificado VOROX.</p>';
      if (!sorted.length) {
        html += '<p class="campus-empty">No hay ofertas publicadas aún.</p>';
      } else {
        html += '<div class="campus-jobs">';
        sorted.forEach(function (job) {
          var score = matchScore(job, profile);
          var applied = apps.some(function (a) {
            return a.jobId === job.id && profile && a.profileEmail === profile.email;
          });
          html += '<article class="campus-job">';
          html += '<div class="campus-job__top">';
          html += '<span class="campus-job__match">' + score + '% match</span>';
          html += '<span class="campus-job__modality">' + escapeHtml(job.modality) + '</span>';
          html += '</div>';
          html += '<h4>' + escapeHtml(job.title) + '</h4>';
          html += '<p class="campus-job__company">' + escapeHtml(job.companyName) + ' · ' + escapeHtml(job.location) + '</p>';
          html += '<p class="campus-job__career">' + careerLabel(job.career) + '</p>';
          html += '<p class="campus-job__desc">' + escapeHtml(job.description) + '</p>';
          if (applied) {
            html += '<span class="campus-job__applied">✓ Ya postulaste</span>';
          } else {
            html += '<button type="button" class="btn btn--cta btn--sm" data-apply-job="' + escapeHtml(job.id) + '">Postularme con mi certificado</button>';
          }
          html += '</article>';
        });
        html += '</div>';
      }
    }

    if (tab === 'postulaciones') {
      var mine = profile
        ? apps.filter(function (a) { return a.profileEmail === profile.email; })
        : [];
      html += '<h3>Monitor de postulaciones</h3>';
      if (!profile) {
        html += '<p class="campus-empty">Creá tu perfil en la pestaña «Mi perfil y CV».</p>';
      } else if (!mine.length) {
        html += '<p class="campus-empty">Aún no te postulaste a ninguna oferta.</p>';
      } else {
        html += '<div class="campus-apps">';
        mine.forEach(function (app) {
          var job = jobs.find(function (j) { return j.id === app.jobId; });
          html += '<article class="campus-app">';
          html += '<div class="campus-app__status campus-app__status--' + app.status + '">' + app.status + '</div>';
          html += '<h4>' + escapeHtml(job ? job.title : 'Oferta') + '</h4>';
          html += '<p>' + escapeHtml(job ? job.companyName : '') + '</p>';
          html += '<p class="campus-app__meta">Certificado: ' + escapeHtml(app.certificateId) + ' · ' + new Date(app.createdAt).toLocaleDateString('es-AR') + '</p>';
          html += '</article>';
        });
        html += '</div>';
      }
    }

    panel.innerHTML = html;

    var form = $('profileForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        saveProfile({
          name: fd.get('name').trim(),
          email: fd.get('email').trim(),
          career: fd.get('career'),
          certificateId: fd.get('certificateId').trim(),
          portfolio: fd.get('portfolio').trim(),
          summary: fd.get('summary').trim(),
          experience: fd.get('experience').trim(),
          skills: fd.get('skills').trim(),
          education: fd.get('education').trim()
        });
        $('cvPreview').innerHTML = renderCvPreview(getProfile());
        alert('Perfil y CV guardados.');
      });
    }

    panel.querySelectorAll('[data-apply-job]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var res = applyToJob(btn.getAttribute('data-apply-job'));
        if (res.ok) {
          alert('¡Postulación enviada! La empresa verá tu certificado VOROX y CV.');
          renderStudentTab('empleos');
        } else {
          alert(res.error);
        }
      });
    });
  }

  function renderCompany() {
    var company = getCompany();
    var jobs = getJobs();
    var apps = getApplications();
    var myJobs = company
      ? jobs.filter(function (j) { return j.companyName === company.name; })
      : [];

    var html = '<div class="campus-split campus-split--company">';
    html += '<div>';
    html += '<form class="campus-form" id="companyForm">';
    html += '<h3>Datos de la empresa</h3>';
    html += field('Nombre de la empresa', 'name', company?.name, 'text', true);
    html += field('Contacto RR.HH.', 'contact', company?.contact, 'text', true);
    html += field('Email corporativo', 'email', company?.email, 'email', true);
    html += field('Sitio web', 'website', company?.website, 'url', false);
    html += '<button type="submit" class="btn btn--cta">Guardar empresa</button>';
    html += '</form>';

    html += '<form class="campus-form campus-form--job" id="jobForm">';
    html += '<h3>Publicar puesto laboral</h3>';
    html += field('Título del puesto', 'title', '', 'text', true);
    html += selectField('Carrera requerida', 'career', '', CAREERS);
    html += field('Modalidad', 'modality', '', 'text', false, 'Remoto, Híbrido, Presencial');
    html += field('Ubicación', 'location', '', 'text', false);
    html += textareaField('Descripción', 'description', '', 'Requisitos, responsabilidades y qué buscan.');
    html += '<button type="submit" class="btn btn--cta">Publicar oferta</button>';
    html += '</form>';
    html += '</div>';

    html += '<div>';
    html += '<h3>Postulantes a tus ofertas</h3>';
    if (!company) {
      html += '<p class="campus-empty">Registrá tu empresa para ver postulantes.</p>';
    } else if (!myJobs.length) {
      html += '<p class="campus-empty">Publicá un puesto para recibir candidatos VOROX certificados.</p>';
    } else {
      var myJobIds = myJobs.map(function (j) { return j.id; });
      var candidates = apps.filter(function (a) { return myJobIds.indexOf(a.jobId) !== -1; });
      if (!candidates.length) {
        html += '<p class="campus-empty">Sin postulaciones por ahora. Los alumnos verán tus ofertas en el campus.</p>';
      } else {
        html += '<div class="campus-candidates">';
        candidates.forEach(function (app) {
          var job = jobs.find(function (j) { return j.id === app.jobId; });
          html += '<article class="campus-candidate">';
          html += '<h4>' + escapeHtml(app.profileName) + '</h4>';
          html += '<p class="campus-candidate__job">Postuló a: ' + escapeHtml(job ? job.title : '') + '</p>';
          html += '<p><strong>Carrera:</strong> ' + careerLabel(app.career) + '</p>';
          html += '<p><strong>Certificado VOROX:</strong> ' + escapeHtml(app.certificateId) + '</p>';
          if (app.cvSummary) {
            html += '<p class="campus-candidate__cv">' + escapeHtml(app.cvSummary) + '</p>';
          }
          html += '<p class="campus-app__meta">' + escapeHtml(app.profileEmail) + ' · ' + new Date(app.createdAt).toLocaleDateString('es-AR') + '</p>';
          html += '</article>';
        });
        html += '</div>';
      }
    }

    if (myJobs.length) {
      html += '<h3 style="margin-top:28px">Tus ofertas activas</h3><ul class="campus-job-list">';
      myJobs.forEach(function (j) {
        html += '<li><strong>' + escapeHtml(j.title) + '</strong> — ' + careerLabel(j.career) + '</li>';
      });
      html += '</ul>';
    }

    html += '</div></div>';

    $('campusCompanyPanel').innerHTML = html;

    $('companyForm')?.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(e.target);
      saveCompany({
        name: fd.get('name').trim(),
        contact: fd.get('contact').trim(),
        email: fd.get('email').trim(),
        website: fd.get('website').trim()
      });
      alert('Empresa registrada.');
      renderCompany();
    });

    $('jobForm')?.addEventListener('submit', function (e) {
      e.preventDefault();
      var comp = getCompany();
      if (!comp || !comp.name) {
        alert('Primero registrá los datos de tu empresa.');
        return;
      }
      var fd = new FormData(e.target);
      addJob({
        companyName: comp.name,
        title: fd.get('title').trim(),
        career: fd.get('career'),
        modality: fd.get('modality').trim() || 'A convenir',
        location: fd.get('location').trim() || 'LATAM',
        description: fd.get('description').trim()
      });
      e.target.reset();
      alert('Oferta publicada. Los alumnos certificados podrán postularse.');
      renderCompany();
    });
  }

  function renderCvPreview(profile) {
    if (!profile || !profile.name) {
      return '<div class="campus-cv-empty"><p>Tu CV aparecerá acá cuando guardes el perfil.</p></div>';
    }
    var html = '<div class="campus-cv">';
    html += '<h3>' + escapeHtml(profile.name) + '</h3>';
    html += '<p class="campus-cv__tag">' + careerLabel(profile.career) + ' · Certificado ' + escapeHtml(profile.certificateId) + '</p>';
    if (profile.portfolio) html += '<p><a href="' + escapeHtml(profile.portfolio) + '" target="_blank" rel="noopener">Portfolio / LinkedIn</a></p>';
    if (profile.summary) html += '<section><h4>Resumen</h4><p>' + escapeHtml(profile.summary) + '</p></section>';
    if (profile.skills) html += '<section><h4>Habilidades</h4><p>' + escapeHtml(profile.skills) + '</p></section>';
    if (profile.experience) html += '<section><h4>Experiencia</h4><p>' + escapeHtml(profile.experience) + '</p></section>';
    if (profile.education) html += '<section><h4>Formación</h4><p>' + escapeHtml(profile.education) + '</p></section>';
    html += '</div>';
    return html;
  }

  function field(label, name, value, type, required, placeholder) {
    return '<div class="form-group"><label for="f-' + name + '">' + label + '</label>' +
      '<input type="' + type + '" id="f-' + name + '" name="' + name + '" value="' + escapeHtml(value || '') + '"' +
      (required ? ' required' : '') + (placeholder ? ' placeholder="' + escapeHtml(placeholder) + '"' : '') + ' /></div>';
  }

  function textareaField(label, name, value, placeholder) {
    return '<div class="form-group"><label for="f-' + name + '">' + label + '</label>' +
      '<textarea id="f-' + name + '" name="' + name + '" rows="3" placeholder="' + escapeHtml(placeholder) + '">' +
      escapeHtml(value || '') + '</textarea></div>';
  }

  function selectField(label, name, value, options) {
    var html = '<div class="form-group"><label for="f-' + name + '">' + label + '</label><select id="f-' + name + '" name="' + name + '" required>';
    html += '<option value="" disabled' + (!value ? ' selected' : '') + '>Seleccionar</option>';
    options.forEach(function (o) {
      html += '<option value="' + o.id + '"' + (value === o.id ? ' selected' : '') + '>' + escapeHtml(o.label) + '</option>';
    });
    html += '</select></div>';
    return html;
  }

  function bindEvents() {
    $('campusRoleStudent')?.addEventListener('click', showStudent);
    $('campusRoleCompany')?.addEventListener('click', showCompany);
    $('campusBackHub')?.addEventListener('click', showHub);
    $('campusBackHub2')?.addEventListener('click', showHub);

    document.querySelectorAll('[data-student-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderStudentTab(btn.getAttribute('data-student-tab'));
      });
    });
  }

  function init() {
    if (!$('campusEmpleo')) return;
    ensureJobs();
    bindEvents();
    showHub();
  }

  return { init: init };

})();
