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
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 40);
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

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      closeAllMenus();
      if (!isOpen) {
        dropdown.classList.add('is-open');
        panel.hidden = false;
        trigger.setAttribute('aria-expanded', 'true');
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

  applyForm.addEventListener('submit', function (e) {
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

  const heroCareers = [
    'Full Stack Development',
    'Data Science',
    'AI Engineering',
    'Data Engineering'
  ];
  const heroCareerText = document.getElementById('heroCareerText');
  let heroCareerIndex = 0;

  if (heroCareerText) {
    setInterval(function () {
      heroCareerText.classList.add('is-changing');
      setTimeout(function () {
        heroCareerIndex = (heroCareerIndex + 1) % heroCareers.length;
        heroCareerText.textContent = heroCareers[heroCareerIndex];
        heroCareerText.classList.remove('is-changing');
      }, 350);
    }, 2800);
  }

  const heroPlayer = document.getElementById('heroVideoPlayer');
  const heroVideo = document.getElementById('heroVideo');
  const heroPlay = document.getElementById('heroVideoPlay');
  let heroMode = 'idle';

  function startHeroScene() {
    if (!heroPlayer || heroMode === 'real') return;
    heroMode = 'scene';
    heroPlayer.classList.add('is-playing-scene');
    heroPlayer.classList.remove('is-paused');
    heroPlay?.setAttribute('aria-label', 'Pausar video');
  }

  function startHeroRealVideo() {
    if (!heroPlayer || !heroVideo) return;
    heroMode = 'real';
    heroPlayer.classList.add('is-playing-real');
    heroPlayer.classList.remove('is-playing-scene', 'is-paused');
    heroPlay?.setAttribute('aria-label', 'Pausar video');
    heroVideo.play().catch(function () {
      startHeroScene();
    });
  }

  function pauseHero() {
    if (!heroPlayer) return;
    heroPlayer.classList.add('is-paused');
    heroPlay?.setAttribute('aria-label', 'Reproducir video');
    if (heroMode === 'real' && heroVideo) heroVideo.pause();
  }

  if (heroVideo) {
    heroVideo.addEventListener('loadeddata', function () {
      if (heroVideo.videoWidth > 0) startHeroRealVideo();
    }, { once: true });

    heroVideo.addEventListener('error', function () {
      if (heroMode === 'idle') startHeroScene();
    }, { once: true });
  }

  if (heroPlayer) {
    setTimeout(function () {
      if (heroMode === 'idle') startHeroScene();
    }, 1000);
  }

  heroPlay?.addEventListener('click', function () {
    if (heroPlayer?.classList.contains('is-paused') || heroMode === 'idle') {
      if (heroMode === 'real') startHeroRealVideo();
      else startHeroScene();
    } else {
      pauseHero();
    }
  });

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
    '.why__card, .career-card, .success-card, .pricing__card, .community__card'
  ).forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();
