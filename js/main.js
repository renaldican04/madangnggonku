(function () {
  'use strict';

  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const panel = document.querySelector('.navbar__panel');
  const navLinks = Array.from(document.querySelectorAll('.navbar__link'));
  const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const fadeTargets = Array.from(document.querySelectorAll('.fade-up'));
  const testimonialTrack = document.querySelector('.testimonial-slider__track');
  const testimonialCards = Array.from(document.querySelectorAll('.testimoni-card'));
  const dotsContainer = document.querySelector('.testimonial-dots');
  const prevButton = document.querySelector('[data-slider-prev]');
  const nextButton = document.querySelector('[data-slider-next]');

  let currentSlide = 0;
  let autoSlide = null;

  const getNavbarOffset = () => (navbar ? navbar.getBoundingClientRect().height : 0);

  const closeMenu = () => {
    if (!toggle || !panel) return;
    toggle.classList.remove('open');
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka menu navigasi');
    body.style.overflow = '';
  };

  const openMenu = () => {
    if (!toggle || !panel) return;
    toggle.classList.add('open');
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Tutup menu navigasi');
    body.style.overflow = 'hidden';
  };

  const toggleMenu = () => {
    if (!toggle || !panel) return;
    const isOpen = toggle.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
  };

  const scrollToTarget = (targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;
    const offset = getNavbarOffset() + 8;
    const top = window.pageYOffset + target.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const updateNavbarState = () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  };

  const setActiveLink = () => {
    const sections = ['home', 'tentang', 'menu', 'testimoni', 'reservasi', 'kontak']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const offset = getNavbarOffset() + 120;
    let activeSection = sections[0];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        activeSection = section;
      }
    });

    navLinks.forEach((link) => {
      const matches = link.getAttribute('href') === `#${activeSection.id}`;
      link.classList.toggle('active', matches);
    });
  };

  const createDots = () => {
    if (!dotsContainer || !testimonialCards.length) return;
    dotsContainer.innerHTML = '';
    testimonialCards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Tampilkan testimoni ${index + 1}`);
      dot.addEventListener('click', () => showSlide(index, true));
      dotsContainer.appendChild(dot);
    });
  };

  const updateSlider = () => {
    if (!testimonialTrack || !testimonialCards.length) return;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    Array.from(dotsContainer ? dotsContainer.children : []).forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentSlide);
    });
  };

  const showSlide = (index, restart = false) => {
    if (!testimonialCards.length) return;
    currentSlide = (index + testimonialCards.length) % testimonialCards.length;
    updateSlider();
    if (restart) resetAutoSlide();
  };

  const nextSlide = (restart = false) => showSlide(currentSlide + 1, restart);
  const prevSlide = (restart = false) => showSlide(currentSlide - 1, restart);

  const startAutoSlide = () => {
    if (!testimonialCards.length) return;
    stopAutoSlide();
    autoSlide = window.setInterval(() => nextSlide(false), 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlide) {
      window.clearInterval(autoSlide);
      autoSlide = null;
    }
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeTargets.forEach((el) => observer.observe(el));
  } else {
    fadeTargets.forEach((el) => el.classList.add('visible'));
  }

  if (toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  document.addEventListener('click', (event) => {
    if (!panel || !toggle) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      scrollToTarget(href);
      closeMenu();
    });
  });

  if (prevButton) prevButton.addEventListener('click', () => prevSlide(true));
  if (nextButton) nextButton.addEventListener('click', () => nextSlide(true));
  if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', stopAutoSlide);
    testimonialTrack.addEventListener('mouseleave', startAutoSlide);
  }

  createDots();
  updateSlider();
  startAutoSlide();

  window.addEventListener('scroll', () => {
    updateNavbarState();
    setActiveLink();
  }, { passive: true });
  window.addEventListener('resize', () => {
    updateNavbarState();
    setActiveLink();
  }, { passive: true });

  updateNavbarState();
  setActiveLink();
})();