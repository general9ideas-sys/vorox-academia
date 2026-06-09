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

  const heroSlides = [
    {
      name: 'Full Stack Development',
      desc: 'Desarrollá aplicaciones web de punta a punta'
    },
    {
      name: 'Data Science',
      desc: 'Analizá datos y creá modelos de machine learning'
    },
    {
      name: 'AI Engineering',
      desc: 'Construí soluciones con inteligencia artificial'
    },
    {
      name: 'Data Engineering',
      desc: 'Diseñá pipelines y arquitecturas de datos a escala'
    }
  ];
  const heroCareerText = document.getElementById('heroCareerText');
  const heroCareerDesc = document.getElementById('heroCareerDesc');
  const heroSlideEls = document.querySelectorAll('.hero__slide');
  let heroSlideIndex = 0;
  let heroSlideTimer;

  function showHeroSlide(index) {
    heroSlideIndex = index;
    heroSlideEls.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === index);
    });
    if (heroCareerText) heroCareerText.textContent = heroSlides[index].name;
    if (heroCareerDesc) heroCareerDesc.textContent = heroSlides[index].desc;
  }

  function nextHeroSlide() {
    if (heroCareerText) heroCareerText.classList.add('is-changing');
    if (heroCareerDesc) heroCareerDesc.classList.add('is-changing');
    setTimeout(function () {
      showHeroSlide((heroSlideIndex + 1) % heroSlides.length);
      heroCareerText?.classList.remove('is-changing');
      heroCareerDesc?.classList.remove('is-changing');
    }, 350);
  }

  function startHeroSlideshow() {
    if (!heroSlideEls.length) return;
    clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(nextHeroSlide, 3200);
  }

  if (heroSlideEls.length) {
    showHeroSlide(0);
    startHeroSlideshow();
  }

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
