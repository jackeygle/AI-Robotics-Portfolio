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
