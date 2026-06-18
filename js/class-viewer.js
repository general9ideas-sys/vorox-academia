/**
 * Visor de clases con desbloqueo secuencial y sesiones en vivo (Zoom / Meet).
 */
window.VoroxClassViewer = (function () {
  'use strict';

  var progress = window.VoroxClassProgress;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatDate(iso, tzLabel) {
    if (!iso) return 'Fecha a confirmar con el profesor';
    try {
      var d = new Date(iso);
      return d.toLocaleString('es-AR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + (tzLabel ? ' (' + tzLabel + ')' : '');
    } catch (e) {
      return iso;
    }
  }

  function getSession(liveConfig, lessonNum) {
    if (!liveConfig) return { status: 'pending' };
    var session = liveConfig.sessions && liveConfig.sessions[lessonNum];
    if (session) return session;
    return {
      status: 'pending',
      professor: liveConfig.defaultProfessor || 'Profesor asignado'
    };
  }

  function getLiveStatus(session) {
    if (!session.scheduledAt || session.status === 'pending') return session.status || 'pending';
    if (session.status === 'completed') return 'completed';
    var start = new Date(session.scheduledAt).getTime();
    var end = start + (session.durationMin || 90) * 60 * 1000;
    var now = Date.now();
    if (now >= start && now <= end) return 'live';
    if (now > end) return 'completed';
    return session.status || 'scheduled';
  }

  function meetingLabel(type) {
    if (type === 'meet') return 'Google Meet';
    return 'Zoom';
  }

  function joinLabel(type) {
    if (type === 'meet') return 'Unirse por Google Meet';
    return 'Unirse por Zoom';
  }

  function renderLiveBlock(session, liveStatus, lessonNum, classesUrl) {
    var html = '<div class="lesson-live lesson-live--' + liveStatus + '">';
    html += '<div class="lesson-live__header">';
    html += '<span class="lesson-live__badge">' + (liveStatus === 'live' ? 'En vivo ahora' : liveStatus === 'pending' ? 'Por agendar' : 'Clase en vivo') + '</span>';
    html += '<h4>Sesión sincrónica con el profesor</h4>';
    html += '</div>';

    if (liveStatus === 'pending') {
      html += '<p class="lesson-live__text">El profesor coordinará fecha y link de Zoom/Meet cuando tu cohorte avance. Completá el material de esta clase y consultá el <a href="../plataforma/google-meet.html">hub de clases en vivo</a>.</p>';
      html += '<p class="lesson-live__prof"><strong>Profesor:</strong> ' + escapeHtml(session.professor || 'Por asignar') + '</p>';
    } else {
      html += '<p class="lesson-live__datetime"><strong>Fecha:</strong> ' + formatDate(session.scheduledAt, '') + '</p>';
      html += '<p class="lesson-live__prof"><strong>Profesor:</strong> ' + escapeHtml(session.professor || '') + '</p>';
      if (session.durationMin) {
        html += '<p class="lesson-live__meta"><strong>Duración:</strong> ' + session.durationMin + ' min · <strong>Plataforma:</strong> ' + meetingLabel(session.meetingType) + '</p>';
      }
      if (session.notes) {
        html += '<p class="lesson-live__notes">' + escapeHtml(session.notes) + '</p>';
      }
      if (session.meetingUrl && liveStatus !== 'completed') {
        html += '<div class="lesson-live__actions">';
        html += '<a href="' + escapeHtml(session.meetingUrl) + '" class="btn btn--cta btn--sm lesson-live__join" target="_blank" rel="noopener noreferrer">' + joinLabel(session.meetingType) + '</a>';
        if (session.meetingId) {
          html += '<span class="lesson-live__id">ID: ' + escapeHtml(session.meetingId) + '</span>';
        }
        if (session.passcode) {
          html += '<span class="lesson-live__id">Código: ' + escapeHtml(session.passcode) + '</span>';
        }
        html += '</div>';
      }
      if (liveStatus === 'completed') {
        html += '<p class="lesson-live__text">Esta sesión ya finalizó. La grabación estará disponible en el aula virtual.</p>';
      }
    }

    html += '<a href="../plataforma/google-meet.html#clase-' + String(lessonNum).padStart(2, '0') + '" class="lesson-live__hub">Ver en agenda de clases en vivo →</a>';
    html += '</div>';
    return html;
  }

  function renderLessonContent(lesson, courseId, liveConfig, classesUrl) {
    var html = '';
    html += '<div class="lesson__block"><h4>Objetivos</h4><ul>';
    lesson.objectives.forEach(function (obj) {
      html += '<li>' + obj + '</li>';
    });
    html += '</ul></div>';
    html += '<div class="lesson__block"><h4>Contenido</h4>' + lesson.content + '</div>';
    if (lesson.code) {
      html += '<div class="lesson__block"><h4>Ejemplo en código</h4>';
      html += '<pre class="lesson__code"><code>' + escapeHtml(lesson.code) + '</code></pre></div>';
    }
    html += '<div class="lesson__block lesson__exercise"><h4>Ejercicio práctico</h4><p>' + lesson.exercise + '</p></div>';

    if (!progress.isComplete(courseId, lesson.n)) {
      html += '<div class="lesson__complete">';
      html += '<button type="button" class="btn btn--outline-nav btn--sm" data-complete-lesson="' + lesson.n + '">Marcar clase como completada</button>';
      html += '<p class="lesson__complete-hint">Al completarla se desbloquea la siguiente clase y su sesión en vivo.</p>';
      html += '</div>';
    } else {
      html += '<div class="lesson__done"><span>✓ Clase completada</span></div>';
    }
    return html;
  }

  function countLessons(modules) {
    var total = 0;
    modules.forEach(function (mod) { total += mod.lessons.length; });
    return total;
  }

  function init(options) {
    var modules = options.modules;
    var liveConfig = options.liveSessions;
    var nav = document.getElementById(options.navId || 'classesNav');
    var main = document.getElementById(options.mainId || 'classesMain');
    if (!modules || !nav || !main) return;

    var courseId = (liveConfig && liveConfig.courseId) || options.courseId || 'course';
    var classesUrl = (liveConfig && liveConfig.classesUrl) || options.classesUrl || '';
    var totalLessons = countLessons(modules);
    var completed = progress.getCompleted(courseId);
    var pct = progress.getProgressPercent(courseId, totalLessons);

    var navHtml = '<div class="classes-progress">';
    navHtml += '<p><strong>Progreso:</strong> ' + completed.length + ' / ' + totalLessons + ' clases</p>';
    navHtml += '<div class="classes-progress__bar"><span style="width:' + pct + '%"></span></div>';
    navHtml += '</div><h2>Índice de clases</h2>';
    var mainHtml = '';

    modules.forEach(function (mod) {
      var modId = 'modulo-' + String(mod.id).padStart(2, '0');
      var navListId = 'nav-mod-' + mod.id;
      navHtml += '<div class="classes-nav__mod">';
      navHtml += '<button type="button" class="classes-nav__toggle" aria-expanded="false" aria-controls="' + navListId + '">';
      navHtml += '<span>Módulo ' + mod.id + '</span>';
      navHtml += '<svg class="classes-nav__chevron" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
      navHtml += '</button>';
      navHtml += '<div class="classes-nav__list" id="' + navListId + '" hidden>';

      mod.lessons.forEach(function (lesson) {
        var lessonId = 'clase-' + String(lesson.n).padStart(2, '0');
        var unlocked = progress.isUnlocked(courseId, lesson.n);
        var done = progress.isComplete(courseId, lesson.n);
        if (unlocked) {
          navHtml += '<a href="#' + lessonId + '" class="' + (done ? 'is-done' : '') + '">';
          navHtml += 'Clase ' + lesson.n + ': ' + lesson.title;
          navHtml += '</a>';
        } else {
          navHtml += '<span class="classes-nav__locked" title="Completa la clase anterior">';
          navHtml += '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M8 1a3 3 0 0 0-3 3v2H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V4a3 3 0 0 0-3-3zm-2 5V4a2 2 0 1 1 4 0v2H6z"/></svg>';
          navHtml += ' Clase ' + lesson.n + ': ' + lesson.title;
          navHtml += '</span>';
        }
      });
      navHtml += '</div></div>';

      var lessonsId = 'lessons-mod-' + mod.id;
      mainHtml += '<section class="classes-module" id="' + modId + '">';
      mainHtml += '<div class="classes-module__header">';
      mainHtml += '<div><span>Módulo ' + mod.id + '</span>';
      mainHtml += '<h2>' + mod.title + '</h2><p>' + mod.weeks + ' · ' + mod.lessons.length + ' clases</p></div>';
      mainHtml += '<button type="button" class="classes-module__toggle btn btn--outline-nav btn--sm" aria-expanded="false" aria-controls="' + lessonsId + '">';
      mainHtml += '<span class="classes-module__toggle-text">Ver clases</span>';
      mainHtml += '<svg class="classes-module__chevron" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
      mainHtml += '</button></div>';
      mainHtml += '<div class="classes-module__lessons" id="' + lessonsId + '" hidden>';

      mod.lessons.forEach(function (lesson) {
        var lessonId = 'clase-' + String(lesson.n).padStart(2, '0');
        var unlocked = progress.isUnlocked(courseId, lesson.n);
        var session = getSession(liveConfig, lesson.n);
        var liveStatus = getLiveStatus(session);

        mainHtml += '<article class="lesson' + (unlocked ? '' : ' lesson--locked') + '" id="' + lessonId + '">';
        mainHtml += '<div class="lesson__top">';
        mainHtml += '<span class="lesson__num">Clase ' + lesson.n + '</span>';
        mainHtml += '<h3>' + lesson.title + '</h3>';
        mainHtml += '<span class="lesson__duration">' + lesson.duration + '</span>';
        mainHtml += '</div>';

        if (unlocked) {
          mainHtml += renderLiveBlock(session, liveStatus, lesson.n, classesUrl);
          mainHtml += renderLessonContent(lesson, courseId, liveConfig, classesUrl);
        } else {
          mainHtml += '<div class="lesson-locked">';
          mainHtml += '<svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true"><path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3H9z"/></svg>';
          mainHtml += '<h4>Clase bloqueada</h4>';
          mainHtml += '<p>Completá la <strong>clase ' + (lesson.n - 1) + '</strong> para desbloquear el contenido y la sesión en vivo con el profesor.</p>';
          mainHtml += '</div>';
        }
        mainHtml += '</article>';
      });
      mainHtml += '</div></section>';
    });

    nav.innerHTML = navHtml;
    main.innerHTML = mainHtml;

    document.querySelectorAll('.classes-nav__toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var list = document.getElementById(btn.getAttribute('aria-controls'));
        if (!list) return;
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        list.hidden = expanded;
        btn.closest('.classes-nav__mod').classList.toggle('is-open', !expanded);
      });
    });

    document.querySelectorAll('.classes-module__toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        var label = btn.querySelector('.classes-module__toggle-text');
        var section = btn.closest('.classes-module');
        if (!panel || !section) return;
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
        section.classList.toggle('is-open', !expanded);
        if (label) label.textContent = expanded ? 'Ver clases' : 'Ocultar clases';
      });
    });

    main.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-complete-lesson]');
      if (!btn) return;
      var num = parseInt(btn.getAttribute('data-complete-lesson'), 10);
      progress.markComplete(courseId, num);
      init(options);
      var nextId = '#clase-' + String(num + 1).padStart(2, '0');
      if (document.querySelector(nextId)) {
        window.location.hash = nextId;
      }
    });

    var hash = window.location.hash;
    if (hash) {
      var target = document.querySelector(hash);
      if (target) {
        var parentPanel = target.closest('.classes-module__lessons');
        var parentSection = target.closest('.classes-module');
        if (parentPanel && parentSection) {
          parentPanel.hidden = false;
          parentSection.classList.add('is-open');
          var toggleBtn = parentSection.querySelector('.classes-module__toggle');
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'true');
            var toggleLabel = toggleBtn.querySelector('.classes-module__toggle-text');
            if (toggleLabel) toggleLabel.textContent = 'Ocultar clases';
          }
        }
      }
    }
  }

  function renderScheduleList(liveConfig, modules, options) {
    options = options || {};
    var container = document.getElementById(options.containerId || 'liveScheduleList');
    if (!container || !liveConfig || !modules) return;

    var courseId = liveConfig.courseId;
    var items = [];

    modules.forEach(function (mod) {
      mod.lessons.forEach(function (lesson) {
        var session = getSession(liveConfig, lesson.n);
        var liveStatus = getLiveStatus(session);
        var unlocked = progress.isUnlocked(courseId, lesson.n);
        items.push({
          n: lesson.n,
          title: lesson.title,
          module: mod.title,
          session: session,
          liveStatus: liveStatus,
          unlocked: unlocked
        });
      });
    });

    var filter = options.filter || 'upcoming';
    var filtered = items.filter(function (item) {
      if (filter === 'scheduled') return item.session.scheduledAt && item.liveStatus !== 'completed';
      if (filter === 'upcoming') return item.session.scheduledAt && (item.liveStatus === 'scheduled' || item.liveStatus === 'live');
      return true;
    });

    if (!filtered.length) {
      container.innerHTML = '<p class="live-schedule__empty">No hay sesiones agendadas por el momento. El profesor publicará fechas y links de Zoom a medida que avance la cohorte.</p>';
      return;
    }

    var html = '<div class="live-schedule__list">';
    filtered.forEach(function (item) {
      var lessonId = 'clase-' + String(item.n).padStart(2, '0');
      html += '<article class="live-schedule__item live-schedule__item--' + item.liveStatus + '" id="' + lessonId + '">';
      html += '<div class="live-schedule__top">';
      html += '<span class="live-schedule__num">Clase ' + item.n + '</span>';
      html += '<span class="live-schedule__status">' + (item.liveStatus === 'live' ? 'En vivo' : item.unlocked ? 'Disponible' : 'Bloqueada') + '</span>';
      html += '</div>';
      html += '<h3>' + escapeHtml(item.title) + '</h3>';
      html += '<p class="live-schedule__mod">' + escapeHtml(item.module) + '</p>';
      html += '<p class="live-schedule__date">' + formatDate(item.session.scheduledAt, liveConfig.timezoneLabel) + '</p>';
      html += '<p class="live-schedule__prof">Prof. ' + escapeHtml(item.session.professor || liveConfig.defaultProfessor) + ' · ' + meetingLabel(item.session.meetingType) + '</p>';
      html += '<div class="live-schedule__actions">';
      if (item.session.meetingUrl && item.unlocked && item.liveStatus !== 'completed') {
        html += '<a href="' + escapeHtml(item.session.meetingUrl) + '" class="btn btn--cta btn--sm" target="_blank" rel="noopener noreferrer">' + joinLabel(item.session.meetingType) + '</a>';
      }
      html += '<a href="' + escapeHtml(liveConfig.classesUrl) + '#' + lessonId + '" class="btn btn--outline-nav btn--sm">Ir a la clase</a>';
      html += '</div></article>';
    });
    html += '</div>';
    container.innerHTML = html;
  }

  return {
    init: init,
    renderScheduleList: renderScheduleList,
    formatDate: formatDate,
    getSession: getSession,
    getLiveStatus: getLiveStatus
  };
})();
