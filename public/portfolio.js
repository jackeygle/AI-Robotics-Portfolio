const player = document.getElementById('demo-player');
const frame = document.getElementById('demo-frame');
const title = document.getElementById('demo-title');
let launchButton;
const allowedDemos = new Set(['pathfinding-visualizer-game.html', 'snake-game.html', '2048-ai-game.html', 'sudoku-game.html', 'conway-game.html', 'tetris-game.html']);
document.querySelectorAll('.demo-launch').forEach(button => {
  button.addEventListener('click', () => {
    if (!allowedDemos.has(button.dataset.demo)) return;
    launchButton = button;
    title.textContent = button.dataset.title;
    frame.title = button.dataset.title + ' interactive demo';
    frame.src = button.dataset.demo;
    player.hidden = false;
    title.focus({preventScroll: true});
    player.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
  });
});
document.getElementById('demo-close').addEventListener('click', () => {
  frame.removeAttribute('src');
  player.hidden = true;
  launchButton?.focus();
});

// Decorative parallax uses one queued frame and stops outside the first screen.
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.getElementById('motion-toggle');
let manuallyPaused = false;
let sceneFrame = 0;
let pointerX = 0;
let pointerY = 0;
function updateScene() {
  sceneFrame = 0;
  const fade = Math.max(0.12, 1 - window.scrollY / Math.max(window.innerHeight, 1));
  document.documentElement.style.setProperty('--scene-opacity', fade);
  const staticScene = manuallyPaused || motionQuery.matches || window.scrollY > window.innerHeight || window.innerWidth < 761;
  document.documentElement.style.setProperty('--scene-x', staticScene ? '0px' : pointerX + 'px');
  document.documentElement.style.setProperty('--scene-y', staticScene ? '0px' : pointerY + 'px');
}
function queueScene() { if (!sceneFrame) sceneFrame = requestAnimationFrame(updateScene); }
window.addEventListener('pointermove', event => {
  if (manuallyPaused || motionQuery.matches || window.scrollY > window.innerHeight || window.innerWidth < 761) return;
  pointerX = (event.clientX / window.innerWidth - 0.5) * 12;
  pointerY = (event.clientY / window.innerHeight - 0.5) * 8;
  queueScene();
}, {passive: true});
window.addEventListener('scroll', queueScene, {passive: true});
window.addEventListener('resize', queueScene, {passive: true});
function syncMotion() {
  const paused = manuallyPaused || motionQuery.matches;
  document.body.classList.toggle('motion-paused', paused);
  motionToggle.disabled = motionQuery.matches;
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = motionQuery.matches ? 'Reduced motion enabled' : manuallyPaused ? 'Resume background' : 'Pause background';
  queueScene();
}
motionToggle.addEventListener('click', () => { manuallyPaused = !manuallyPaused; syncMotion(); });
motionQuery.addEventListener('change', syncMotion);
syncMotion();
