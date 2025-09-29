// Smooth scroll for internal links
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const targetId = link.getAttribute('href');
  if (targetId.length > 1) {
    const el = document.querySelector(targetId);
    if (el) {
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    }
  }
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// (Removed) Resume upload/preview/download logic — no longer needed


