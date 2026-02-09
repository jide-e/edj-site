/* ============================================
   EDJ CONSULTING — MAIN JAVASCRIPT
   ============================================ */

(function () {
  'use strict';

  // --- Navigation scroll behavior ---
  const nav = document.querySelector('.nav');

  var navFixed = nav && nav.classList.contains('nav--fixed-dark');

  function handleNavScroll() {
    if (!nav || navFixed) return;
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile hamburger ---
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay = document.querySelector('.nav__overlay');

  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('is-open');
      overlay.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on overlay link click
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        hamburger.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  // --- Scroll reveal with IntersectionObserver ---
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // --- Label accent line animation ---
  var labels = document.querySelectorAll('.label');

  if ('IntersectionObserver' in window && labels.length > 0) {
    var labelObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            labelObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    labels.forEach(function (label) {
      labelObserver.observe(label);
    });
  }

  // --- Contact form handling ---
  var contactForm = document.getElementById('contact-form');
  var formContainer = document.getElementById('form-container');
  var successPanel = document.getElementById('form-success');

  if (contactForm && formContainer && successPanel) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      var valid = true;
      var requiredFields = contactForm.querySelectorAll('[required]');

      requiredFields.forEach(function (field) {
        var errorEl = document.getElementById(field.id + '-error');
        if (!field.value.trim()) {
          field.setAttribute('aria-invalid', 'true');
          if (errorEl) errorEl.textContent = 'This field is required.';
          valid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          field.setAttribute('aria-invalid', 'true');
          if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
          valid = false;
        } else {
          field.removeAttribute('aria-invalid');
          if (errorEl) errorEl.textContent = '';
        }
      });

      if (!valid) return;

      // Submit to Formspree via fetch
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      var formData = new FormData(contactForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      fetch(contactForm.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(function (response) {
          if (response.ok) {
            formContainer.style.display = 'none';
            successPanel.style.display = 'block';
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            alert('Something went wrong. Please try again or email us directly.');
          }
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
          alert('Something went wrong. Please try again or email us directly.');
        });
    });

    // Clear error on input
    contactForm.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        field.removeAttribute('aria-invalid');
        var errorEl = document.getElementById(field.id + '-error');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }
})();
