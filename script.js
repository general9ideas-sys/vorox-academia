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
    '.why__card, .career-card, .success-card, .pricing__card, .community__card, .platform__card, .stats__item, .benefits__item, .teacher-card, .about-mission__card, .testimonial-float'
  ).forEach(function (el) {
    if (el.classList.contains('success-card') && el.closest('.testimonial-carousel')) return;
    if (el.classList.contains('testimonial-float__card')) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* Landing: carrusel clásico solo si existe (testimonial-float usa CSS) */
  (function initTestimonialCarousel() {
    var carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    var track = carousel.querySelector('.testimonial-carousel__track');
    var prevBtn = carousel.querySelector('.testimonial-carousel__nav--prev');
    var nextBtn = carousel.querySelector('.testimonial-carousel__nav--next');
    var dotsWrap = carousel.querySelector('.testimonial-carousel__dots');
    var originals = Array.prototype.slice.call(track.querySelectorAll('.testimonial-card'));
    var total = originals.length;
    if (!total) return;

    originals.forEach(function (slide) {
      track.appendChild(slide.cloneNode(true));
    });

    var index = 0;
    var autoplayTimer = null;
    var gap = 24;

    function getStep() {
      var slide = track.querySelector('.testimonial-card');
      return slide ? slide.offsetWidth + gap : 0;
    }

    function normalizedIndex() {
      return ((index % total) + total) % total;
    }

    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (var i = 0; i < total; i++) {
        (function (dotIndex) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'testimonial-carousel__dot';
          dot.setAttribute('aria-label', 'Ir al comentario ' + (dotIndex + 1));
          dot.setAttribute('role', 'tab');
          dot.addEventListener('click', function () {
            index = dotIndex;
            setTransform(true);
            startAutoplay();
          });
          dotsWrap.appendChild(dot);
        })(i);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      var active = normalizedIndex();
      dotsWrap.querySelectorAll('.testimonial-carousel__dot').forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === active);
        dot.setAttribute('aria-selected', i === active ? 'true' : 'false');
      });
    }

    function setTransform(animate) {
      track.style.transition = animate ? 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
      track.style.transform = 'translateX(-' + (index * getStep()) + 'px)';
      updateDots();
    }

    function resetIfNeeded() {
      if (index >= total) {
        index = 0;
        setTransform(false);
      } else if (index < 0) {
        index = total - 1;
        setTransform(false);
      }
    }

    function next() {
      index += 1;
      setTransform(true);
      track.addEventListener('transitionend', function onEnd() {
        track.removeEventListener('transitionend', onEnd);
        resetIfNeeded();
      }, { once: true });
    }

    function prev() {
      if (index <= 0) {
        index = total;
        setTransform(false);
        requestAnimationFrame(function () {
          index = total - 1;
          setTransform(true);
        });
        return;
      }
      index -= 1;
      setTransform(true);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(next, 4500);
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prev();
        startAutoplay();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        next();
        startAutoplay();
      });
    }

    window.addEventListener('resize', function () {
      setTransform(false);
      updateDots();
    });

    buildDots();
    setTransform(false);
    startAutoplay();
  })();

  (function initTestimonialFloatRandom() {
    var root = document.getElementById('testimonialFloat');
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.classList.add('testimonial-float--js');

    var easings = [
      'linear',
      'ease-in-out',
      'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
      'cubic-bezier(0.36, 0.66, 0.04, 1)',
      'cubic-bezier(0.65, 0, 0.35, 1)'
    ];

    function rand(min, max) {
      return min + Math.random() * (max - min);
    }

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function randPx(min, max) {
      return rand(min, max).toFixed(1) + 'px';
    }

    root.querySelectorAll('.testimonial-float__track').forEach(function (track) {
      var reverse = Math.random() > 0.45;
      track.style.setProperty('--drift-dur', rand(38, 88).toFixed(1) + 's');
      track.style.setProperty('--drift-delay', rand(0, 12).toFixed(2) + 's');
      track.style.setProperty('--drift-dir', reverse ? 'reverse' : 'normal');
      track.style.setProperty('--drift-x', reverse ? '50%' : '-50%');
      track.style.setProperty('--drift-ease', pick(easings));
      track.style.setProperty('--y0', randPx(-52, 52));
      for (var k = 1; k <= 6; k++) {
        track.style.setProperty('--y' + k, randPx(-58, 58));
        track.style.setProperty('--x' + k, randPx(-28, 28));
      }
    });

    var paused = false;
    var hoverCard = null;
    var bodies = [];

    root.querySelectorAll('.testimonial-float__card').forEach(function (card) {
      var tilt = rand(-3.5, 3.5);
      card.style.setProperty('--card-tilt', tilt.toFixed(2) + 'deg');
      bodies.push({
        el: card,
        x: rand(-36, 36),
        y: rand(-72, 72),
        vx: rand(-0.55, 0.55),
        vy: rand(-0.48, 0.48),
        rot: tilt + rand(-1.5, 1.5),
        vr: rand(-0.035, 0.035),
        bx: rand(28, 48),
        by: rand(58, 88),
        chaosAt: performance.now() + rand(1200, 4200)
      });

      card.addEventListener('mouseenter', function () {
        paused = true;
        hoverCard = card;
        root.querySelectorAll('.testimonial-float__card').forEach(function (c) {
          c.classList.toggle('is-hover-freeze', c === card);
        });
      });
      card.addEventListener('mouseleave', function () {
        paused = false;
        hoverCard = null;
        root.querySelectorAll('.testimonial-float__card').forEach(function (c) {
          c.classList.remove('is-hover-freeze');
        });
      });
    });

    function nudge(body) {
      body.vx += rand(-0.12, 0.12);
      body.vy += rand(-0.12, 0.12);
      body.vr += rand(-0.012, 0.012);
      var maxV = 0.85;
      body.vx = Math.max(-maxV, Math.min(maxV, body.vx));
      body.vy = Math.max(-maxV, Math.min(maxV, body.vy));
    }

    function tick(now) {
      bodies.forEach(function (body) {
        if (!paused) {
          if (now >= body.chaosAt) {
            nudge(body);
            body.chaosAt = now + rand(1400, 4800);
          }
          body.x += body.vx;
          body.y += body.vy;
          body.rot += body.vr;
          if (body.x > body.bx || body.x < -body.bx) {
            body.vx *= -1;
            body.x = Math.max(-body.bx, Math.min(body.bx, body.x));
          }
          if (body.y > body.by || body.y < -body.by) {
            body.vy *= -1;
            body.y = Math.max(-body.by, Math.min(body.by, body.y));
          }
        }

        var lift = body.el === hoverCard ? -6 : 0;
        var flatRot = body.el === hoverCard ? 0 : body.rot;
        body.el.style.transform =
          'translate3d(' + body.x.toFixed(2) + 'px,' + (body.y + lift).toFixed(2) + 'px,0) rotate(' + flatRot.toFixed(2) + 'deg)';
      });
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  })();
})();
