let current = 0;
let target = 0;

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

function smooth() {
  current += (target - current) * 0.08;
  document.body.style.transform = `translateY(${-current}px)`;
  requestAnimationFrame(smooth);
}

smooth();