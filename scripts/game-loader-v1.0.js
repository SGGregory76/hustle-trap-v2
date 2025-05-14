// scripts/game-loader-v1.0.js
async function loadModule(path) {
  const res = await fetch(path);
  return res.json();
}

async function initGame() {
  const [resources, items, npcs, missions, economy, map] = await Promise.all([
    loadModule('data/resources.json'),
    loadModule('data/items.json'),
    loadModule('data/npcs.json'),
    loadModule('data/missions.json'),
    loadModule('data/economy.json'),
    loadModule('data/map.json'),
  ]);
  window.GAME = { resources, items, npcs, missions, economy, map };
  initBurnerOS();
}

window.addEventListener('DOMContentLoaded', initGame);
