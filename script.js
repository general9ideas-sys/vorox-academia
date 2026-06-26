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
    if (!track) return;

    var CDN = 'https://cdn.jsdelivr.net/gh/general9ideas-sys/vorox-academia@main/assets/';
    var files = [
      'hero-video.mp4',
      'hero-video-2.mp4',
      'hero-video-3.mp4',
      'hero-video-4.mp4'
    ];
    var useCdn = !/^(localhost|127\.0\.0\.1)$/i.test(location.hostname) && location.protocol !== 'file:';

    function videoSrc(file) {
      return useCdn ? CDN + file : 'assets/' + file + '?v=4videos';
    }

    function createSlide(file, isFirst) {
      var slide = document.createElement('div');
      slide.className = 'hero__slide';
      var video = document.createElement('video');
      video.className = 'hero__bg-video';
      video.setAttribute('data-hero-video', '');
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.setAttribute('playsinline', '');
      video.setAttribute('aria-hidden', 'true');
      if (isFirst) video.autoplay = true;
      var source = document.createElement('source');
      source.type = 'video/mp4';
      source.src = videoSrc(file);
      video.appendChild(source);
      slide.appendChild(video);
      return slide;
    }

    var slides = track.querySelectorAll('.hero__slide');
    if (slides.length < files.length) {
      for (var i = slides.length; i < files.length; i++) {
        track.appendChild(createSlide(files[i], false));
      }
    }

    track.querySelectorAll('.hero__slide').forEach(function (slide, i) {
      if (i >= files.length) return;
      var video = slide.querySelector('[data-hero-video]');
      if (!video) return;
      video.preload = 'auto';
      if (i === 0 && !video.autoplay) video.autoplay = true;
      var source = video.querySelector('source');
      if (!source) {
        source = document.createElement('source');
        source.type = 'video/mp4';
        video.appendChild(source);
      }
      var src = videoSrc(files[i]);
      if (source.getAttribute('src') !== src) {
        source.src = src;
        video.load();
      }
    });

    var videos = track.querySelectorAll('[data-hero-video]');
    var index = 0;
    var total = videos.length;

    function playVideo(video) {
      function start() {
        var playPromise = video.play();
        if (playPromise && playPromise.catch) playPromise.catch(function () {});
      }
      if (video.readyState >= 2) start();
      else video.addEventListener('canplay', start, { once: true });
    }

    function syncVideos() {
      videos.forEach(function (video, i) {
        if (i === index) playVideo(video);
        else video.pause();
      });
    }

    function goTo(target) {
      index = ((target % total) + total) % total;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      syncVideos();
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
})();
