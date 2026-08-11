(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const moreMenuBtn = document.getElementById('moreMenuBtn');
  const moreMenu = document.getElementById('moreMenu');
  const applyForm = document.getElementById('applyForm');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  window.addEventListener('scroll', function () {
    if (navbar) navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
  });

  (function initHeroSlider() {
    var hero = document.getElementById('inicio');
    var slider = document.getElementById('heroSlider');
    if (!hero || !slider) return;

    var track = slider.querySelector('.hero__slider-track');
    var videos = slider.querySelectorAll('[data-hero-video]');
    var index = 0;
    var total = videos.length;

    function replayBrandAnimation() {
      var brand = hero.querySelector('.hero__brand');
      var tagline = hero.querySelector('.hero__tagline');
      if (!brand || !tagline) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      [brand, tagline].forEach(function (el) {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.removeProperty('animation');
      });
    }

    function syncVideos() {
      videos.forEach(function (video, i) {
        if (i === index) {
          var playPromise = video.play();
          if (playPromise && playPromise.catch) playPromise.catch(function () {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }

    function goTo(target) {
      var prev = index;
      index = ((target % total) + total) % total;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      syncVideos();
      if (prev !== index) replayBrandAnimation();
    }

    function next() {
      goTo(index + 1);
    }

    hero.addEventListener('click', next);
    hero.setAttribute('role', 'button');
    hero.setAttribute('tabindex', '0');
    hero.setAttribute('aria-label', 'Clic para cambiar el video de fondo');
    hero.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        next();
      }
    });

    goTo(0);
  })();

  (function initHomeScroll() {
    function scrollToTop(smooth) {
      window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
    }

    if (location.hash === '#inicio') {
      scrollToTop(false);
      requestAnimationFrame(function () { scrollToTop(false); });
    }

    document.querySelectorAll('a[href="#inicio"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (location.hash !== '#inicio') {
          history.pushState(null, '', '#inicio');
        }
        scrollToTop(true);
      });
    });

    window.addEventListener('hashchange', function () {
      if (location.hash === '#inicio') scrollToTop(true);
    });
  })();

  function closeAllMenus() {
    dropdowns.forEach(function (dd) {
      dd.classList.remove('is-open');
      const panel = dd.querySelector('.nav-dropdown__panel');
      const trigger = dd.querySelector('.nav-dropdown__trigger');
      if (panel) panel.hidden = true;
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
    if (moreMenu) moreMenu.hidden = true;
    if (moreMenuBtn) moreMenuBtn.setAttribute('aria-expanded', 'false');
    moreMenuBtn?.closest('.more-menu-wrap')?.classList.remove('is-open');
  }

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector('.nav-dropdown__trigger');
    const panel = dropdown.querySelector('.nav-dropdown__panel');
    const hoverEnabled = dropdown.hasAttribute('data-dropdown-hover');

    function openDropdown() {
      closeAllMenus();
      dropdown.classList.add('is-open');
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdown.classList.remove('is-open');
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    if (hoverEnabled && window.matchMedia('(hover: hover) and (min-width: 992px)').matches) {
      dropdown.addEventListener('mouseenter', openDropdown);
      dropdown.addEventListener('mouseleave', closeDropdown);
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      closeAllMenus();
      if (!isOpen) {
        openDropdown();
      }
    });

    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeAllMenus);
    });
  });

  if (moreMenuBtn && moreMenu) {
    moreMenuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const wrap = moreMenuBtn.closest('.more-menu-wrap');
      const isOpen = !moreMenu.hidden;
      closeAllMenus();
      if (!isOpen) {
        moreMenu.hidden = false;
        moreMenuBtn.setAttribute('aria-expanded', 'true');
        wrap.classList.add('is-open');
      }
    });

    moreMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeAllMenus);
    });
  }

  document.addEventListener('click', closeAllMenus);

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isHidden = mobileNav.hidden;
      closeAllMenus();
      mobileNav.hidden = !isHidden;
    });
  }

  document.querySelectorAll('.mobile-nav__tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.dataset.mobileTab;
      document.querySelectorAll('.mobile-nav__tab').forEach(function (t) {
        t.classList.toggle('active', t === tab);
      });
      document.getElementById('mobilePanelEstudiantes').hidden = target !== 'estudiantes';
      document.getElementById('mobilePanelEmpresas').hidden = target !== 'empresas';
    });
  });

  mobileNav?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.hidden = true;
    });
  });

  document.querySelectorAll('.course-module__toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var bodyId = btn.getAttribute('aria-controls');
      var body = bodyId ? document.getElementById(bodyId) : null;
      var module = btn.closest('.course-module');
      var label = btn.querySelector('.course-module__toggle-text');
      if (!body || !module) return;

      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
      module.classList.toggle('is-open', !expanded);
      if (label) label.textContent = expanded ? 'Ver clases' : 'Ocultar clases';
    });
  });

  document.querySelectorAll('.career-card__expand').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var detailsId = btn.getAttribute('aria-controls');
      var details = detailsId ? document.getElementById(detailsId) : null;
      var card = btn.closest('.career-card');
      if (!details || !card) return;

      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      details.hidden = expanded;
      card.classList.toggle('is-expanded', !expanded);
      btn.textContent = expanded ? 'Ver programa completo' : 'Ocultar detalle';
    });
  });

  if (applyForm) applyForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const carrera = document.getElementById('carrera').value;

    if (!nombre || !email || !carrera) {
      alert('Por favor completá todos los campos obligatorios.');
      return;
    }

    const btn = applyForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '¡Aplicación enviada!';
    btn.disabled = true;

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
      applyForm.reset();
      alert('¡Gracias! Un asesor de VOROX se contactará contigo pronto.');
    }, 2000);
  });

  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const legalTrigger = document.getElementById('legalTrigger');
  const legalCredit = document.getElementById('legalCredit');

  if (legalTrigger && legalCredit) {
    legalTrigger.addEventListener('click', function () {
      const isHidden = legalCredit.hidden;
      legalCredit.hidden = !isHidden;
      legalTrigger.setAttribute('aria-expanded', String(isHidden));
    });
  }

  document.querySelectorAll(
    '.why__card, .career-card, .learn-card, .alumni-chat, .more-card, .empleo-card, .ia-boost__info, .ia-boost__visual, .pricing__card, .community__card, .platform__card, .stats__item, .teacher-card, .about-mission__card, .intro-courses'
  ).forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* Carrusel de cursos introductorios / otros */
  (function initIntroCoursesCarousel() {
    var root = document.getElementById('introCoursesCarousel');
    var section = document.getElementById('cursos-intro');
    if (!root || !section) return;

    var track = root.querySelector('.intro-courses__track');
    var prevBtn = root.querySelector('.intro-courses__nav-btn--prev');
    var nextBtn = root.querySelector('.intro-courses__nav-btn--next');
    var filters = section.querySelectorAll('.intro-courses__filter');
    var titleEl = document.getElementById('intro-courses-title');
    var gap = 12;
    var index = 0;
    var activeFilter = 'nivelacion';
    var titles = {
      nivelacion: 'Prepará tu ingreso a la carrera',
      otros: 'Herramientas tech que agregan valor'
    };

    function visibleCards() {
      return Array.prototype.slice.call(track.querySelectorAll('.intro-course-card')).filter(function (card) {
        return !card.hidden;
      });
    }

    function getPerView() {
      var w = window.innerWidth;
      if (w <= 560) return 1;
      if (w <= 800) return 2;
      if (w <= 1100) return 3;
      return 4;
    }

    function getStep() {
      var cards = visibleCards();
      if (!cards.length) return 0;
      return cards[0].offsetWidth + gap;
    }

    function maxIndex() {
      return Math.max(0, visibleCards().length - getPerView());
    }

    function setTransform(animate) {
      track.style.transition = animate === false ? 'none' : 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = 'translateX(-' + (index * getStep()) + 'px)';
      if (prevBtn) prevBtn.disabled = index <= 0;
      if (nextBtn) nextBtn.disabled = index >= maxIndex();
    }

    function applyFilter(filter) {
      activeFilter = filter;
      index = 0;
      track.querySelectorAll('.intro-course-card').forEach(function (card) {
        var show = card.getAttribute('data-course-cat') === filter;
        card.hidden = !show;
        if (show) {
          card.style.removeProperty('display');
        } else {
          card.style.display = 'none';
        }
      });
      filters.forEach(function (btn) {
        var on = btn.getAttribute('data-course-filter') === filter;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      if (titleEl && titles[filter]) titleEl.textContent = titles[filter];
      setTransform(false);
      requestAnimationFrame(function () {
        setTransform(false);
      });
    }

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.getAttribute('data-course-filter'));
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        index = Math.max(0, index - 1);
        setTransform(true);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        index = Math.min(maxIndex(), index + 1);
        setTransform(true);
      });
    }

    window.addEventListener('resize', function () {
      if (index > maxIndex()) index = maxIndex();
      setTransform(false);
    });

    applyFilter(activeFilter);
  })();
})();
