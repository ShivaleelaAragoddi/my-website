// Contact form dummy handler
function handleFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = 'Thank you for reaching out! (This is a demo form)';
  }, 1200);
  event.target.reset();
  return false;
}

// Subtle fade-in animation on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('section, .project-card, .skills-grid > div');
  const windowHeight = window.innerHeight;
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
}); 