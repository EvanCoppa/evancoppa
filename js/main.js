// Chat bubbles reveal on scroll
const io = new IntersectionObserver((es) => es.forEach((e, i) => {
  if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), 150); io.unobserve(e.target); }
}), { threshold: .4 });
document.querySelectorAll('.bubble').forEach((b) => io.observe(b));

// Horizontal parallax on big skill titles
const rows = [...document.querySelectorAll('.marquee .big')];
function parallax() {
  rows.forEach((el, i) => {
    const r = el.parentElement.getBoundingClientRect();
    const p = Math.max(-400, Math.min(400, (r.top - innerHeight / 2) * (i % 2 ? .3 : -.3)));
    el.style.transform = `translateX(${p}px)`;
  });
}
addEventListener('scroll', parallax, { passive: true }); parallax();

// Counter
const count = document.getElementById('count');
new IntersectionObserver(([e], o) => {
  if (!e.isIntersecting) return; o.disconnect();
  const t0 = performance.now(), end = 25;
  (function tick(t) { const k = Math.min((t - t0) / 1200, 1); count.textContent = Math.round(end * k); if (k < 1) requestAnimationFrame(tick); })(t0);
}).observe(count);

// Browser tabs
document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab,.pane').forEach((n) => n.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById(tab.dataset.tab).classList.add('active');
}));

document.getElementById('year').textContent = new Date().getFullYear();
