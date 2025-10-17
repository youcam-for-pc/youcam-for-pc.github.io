// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('mobile-open');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Parallax hero background
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  }
});

// Download tracking
document.querySelectorAll('a[href*="napkforpc.com"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Download clicked');
  });
});
