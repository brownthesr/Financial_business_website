document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  const fadeEls = document.querySelectorAll(
    '.feature-card, .step, .testimonial-card, .section-header, .cta-card, .hero-content, .hero-visual'
  );
  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.15 }
  );
  fadeEls.forEach(el => observer.observe(el));
});

function handleSignup() {
  const input = document.querySelector('.cta-form input');
  const email = input.value;
  if (email) {
    input.value = '';
    const btn = document.querySelector('.cta-form .btn');
    const original = btn.textContent;
    btn.textContent = 'You\'re on the waitlist!';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.pointerEvents = '';
    }, 3000);
  }
}
