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
    '.why__card, .career-card, .success-card, .pricing__card, .community__card, .platform__card, .stats__item, .benefits__item, .teacher-card, .about-mission__card, .testimonial-carousel'
  ).forEach(function (el) {
    if (el.classList.contains('success-card') && el.closest('.testimonial-carousel')) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  (function initTestimonialCarousel() {
    var carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    var track = carousel.querySelector('.testimonial-carousel__track');
    var slides = carousel.querySelectorAll('.testimonial-card');
    var prevBtn = carousel.querySelector('.testimonial-carousel__nav--prev');
    var nextBtn = carousel.querySelector('.testimonial-carousel__nav--next');
    var dotsWrap = carousel.querySelector('.testimonial-carousel__dots');
    var index = 0;
    var autoplayTimer = null;

    function getPerView() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, slides.length - getPerView());
    }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      var total = getMaxIndex() + 1;
      for (var i = 0; i < total; i++) {
        (function (dotIndex) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'testimonial-carousel__dot' + (dotIndex === index ? ' is-active' : '');
          dot.setAttribute('aria-label', 'Ir al comentario ' + (dotIndex + 1));
          dot.setAttribute('role', 'tab');
          dot.setAttribute('aria-selected', dotIndex === index ? 'true' : 'false');
          dot.addEventListener('click', function () {
            index = dotIndex;
            update();
            startAutoplay();
          });
          dotsWrap.appendChild(dot);
        })(i);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.querySelectorAll('.testimonial-carousel__dot').forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }

    function update() {
      var maxIndex = getMaxIndex();
      if (index > maxIndex) index = maxIndex;
      if (!slides.length) return;

      var gap = 24;
      var offset = index * (slides[0].offsetWidth + gap);
      track.style.transform = 'translateX(-' + offset + 'px)';

      if (prevBtn) prevBtn.disabled = index <= 0;
      if (nextBtn) nextBtn.disabled = index >= maxIndex;
      updateDots();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        index = index >= getMaxIndex() ? 0 : index + 1;
        update();
      }, 6000);
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        index = Math.max(0, index - 1);
        update();
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        index = Math.min(getMaxIndex(), index + 1);
        update();
        startAutoplay();
      });
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', function () {
      buildDots();
      update();
    });

    buildDots();
    update();
    startAutoplay();
  })();
})();
