document.documentElement.classList.add('js-ready');

/**
 * LINKHIPU — Main JavaScript
 * File: js/main.js
 *
 * Modules:
 *   1. Mobile Navigation Toggle
 *   2. Dropdown Accessibility (keyboard nav)
 *   3. Scroll Reveal (Intersection Observer)
 *   4. Active Nav Link on Scroll
 *   5. Smooth Scroll with Fixed-Nav Offset
 *   6. Contact Form Validation & Submission
 *   7. Init
 */

'use strict';


/* ─────────────────────────────────────────
   1. Mobile Navigation Toggle
───────────────────────────────────────── */
const Nav = (() => {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.querySelector('.nav-right');

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function init() {
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on any link click
    menu.querySelectorAll('a:not(.lang-btn)').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  return { init };
})();


/* ─────────────────────────────────────────
   2. Dropdown Accessibility
───────────────────────────────────────── */
const Dropdown = (() => {
  function init() {
    const triggers = document.querySelectorAll('.has-dropdown > a');

    triggers.forEach(trigger => {
      // Toggle via Enter/Space for keyboard users
      trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          trigger.setAttribute('aria-expanded', !isOpen);
        }
      });
    });
  }

  return { init };
})();


/* ─────────────────────────────────────────
   3. Scroll Reveal
───────────────────────────────────────── */
const ScrollReveal = (() => {
  function init() {
    // Skip for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  return { init };
})();


/* ─────────────────────────────────────────
   4. Active Nav Link on Scroll
───────────────────────────────────────── */
const ActiveNav = (() => {
  const sections = ['hero', 'about', 'services', 'process', 'clients', 'testimonials', 'tech', 'blog', 'contact'];

  function getActiveSection() {
    const navH = document.getElementById('navbar')?.offsetHeight ?? 72;
    const scrollY = window.scrollY + navH + 40;

    let active = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        active = id;
      }
    }
    return active;
  }

  function update() {
    const active = getActiveSection();
    document.querySelectorAll('#nav-links > li > a').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === active);
    });
  }

  function init() {
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  return { init };
})();


/* ─────────────────────────────────────────
   5. Smooth Scroll with Nav Offset
───────────────────────────────────────── */
const SmoothScroll = (() => {
  function getNavHeight() {
    return document.getElementById('navbar')?.offsetHeight ?? 72;
  }

  function scrollTo(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getNavHeight();
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        if (!id || !document.getElementById(id)) return;
        e.preventDefault();
        scrollTo(id);
      });
    });
  }

  return { init };
})();


/* ─────────────────────────────────────────
   6. Contact Form
───────────────────────────────────────── */
const ContactForm = (() => {
  // Field validation rules
  const rules = {
    fname:   { label: 'First Name',   test: v => v.length >= 2 },
    lname:   { label: 'Last Name',    test: v => v.length >= 2 },
    email:   { label: 'Email',        test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    message: { label: 'Message',      test: v => v.length >= 10 },
  };

  const get = id => document.getElementById(id)?.value.trim() ?? '';

  function validate() {
    for (const [id, rule] of Object.entries(rules)) {
      if (!rule.test(get(id))) {
        return id === 'email'
          ? 'Please enter a valid work email address.'
          : `${rule.label} must be at least 2 characters.`;
      }
    }
    return null;
  }

  function buildPayload() {
    return {
      firstName: get('fname'),
      lastName:  get('lname'),
      email:     get('email'),
      company:   get('company'),
      service:   get('service'),
      message:   get('message'),
    };
  }

  /**
   * Replace this function body with your real API call.
   *
   * Formspree example:
   *   const res = await fetch('https://formspree.io/f/YOUR_ID', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify(payload),
   *   });
   *   if (!res.ok) throw new Error('Server responded with ' + res.status);
   */
  async function send(payload) {
    await new Promise(r => setTimeout(r, 1200)); // ← replace with real fetch()
    console.log('[LINKHIPU] Form payload:', payload);
  }

  function init() {
    const form    = document.getElementById('contact-form') || document.getElementById('contact-form-el');
    const btn     = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    const errEl   = document.getElementById('form-error');

    if (!form) return;

    // Clear error on user input
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => { if (errEl) errEl.textContent = ''; });
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (errEl) errEl.textContent = '';

      const error = validate();
      if (error) {
        if (errEl) errEl.textContent = error;
        return;
      }

      btn.disabled    = true;
      btn.textContent = 'Sending…';

      try {
        await send(buildPayload());
        form.style.display    = 'none';
        success.style.display = 'block';
      } catch (err) {
        console.error('[LINKHIPU] Form error:', err);
        if (errEl) errEl.textContent = 'An error occurred. Please try again or contact us directly.';
        btn.disabled    = false;
        btn.innerHTML   = 'Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
      }
    });
  }

  return { init };
})();


/* ─────────────────────────────────────────
   7. Init
───────────────────────────────────────── */
function init() {
  Nav.init();
  Dropdown.init();
  ScrollReveal.init();
  ActiveNav.init();
  SmoothScroll.init();
  ContactForm.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
document.querySelectorAll('.faq-question').forEach(btn=>{btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));if(!isOpen)item.classList.add('open');});});

/* ── COOKIE NOTICE BANNER ── */
(function() {
  var NOTICE_KEY = 'lh_cookie_v1';  // bump version to re-show after policy changes
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (!localStorage.getItem(NOTICE_KEY)) {
    setTimeout(function() { banner.classList.add('visible'); }, 800);
  }
  var btn = document.getElementById('cookie-accept');
  if (btn) {
    btn.addEventListener('click', function() {
      localStorage.setItem(NOTICE_KEY, '1');
      banner.classList.remove('visible');
      setTimeout(function() { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 400);
    });
  }
})();
