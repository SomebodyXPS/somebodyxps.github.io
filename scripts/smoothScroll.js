let current = 0;
let target = 0;

const socials = document.getElementById("socials");

window.addEventListener("scroll", () => {
  target = window.scrollY;
});

function smooth() {
  // Calculate real end of content (socials bottom)
  const socialsBottom =
    socials.offsetTop + socials.offsetHeight;

  const maxScroll =
    socialsBottom - window.innerHeight;

  target = Math.max(0, Math.min(target, maxScroll));

  current += (target - current) * 0.08;

  document.body.style.transform = `translateY(${-current}px)`;

  requestAnimationFrame(smooth);
}

smooth();