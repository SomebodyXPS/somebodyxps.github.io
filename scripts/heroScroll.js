const galaxy = document.querySelector(".galaxy");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  galaxy.style.transform = `scale(1.2) translateY(${y * 0.15}px)`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.target.classList.toggle("visible", e.isIntersecting));
});

document.querySelectorAll("section").forEach(s => observer.observe(s));