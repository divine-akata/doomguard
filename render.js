// render.js

let playerEl;
let robotEl;
let rainEl;

// sprite maps
const playerSprites = {
  stand: "player-stand.png",
  hit: "player-swordhit.png",
};

const robotSprites = {
  stand: "robot-stand.png",
  crying: "robot-crying.png",
  dead: "robot-dead.png",
  run: "robot-runsaway.png",
};

// init AFTER DOM loads
function initRender() {
  playerEl = document.getElementById("player");
  robotEl  = document.getElementById("robot");
  rainEl   = document.getElementById("rain");
}

// player visuals
function renderPlayer(state) {
  if (!playerEl) return;
  playerEl.src = playerSprites[state] || playerSprites.stand;
}

// robot visuals
function renderRobot(state) {
  if (!robotEl) return;
  robotEl.src = robotSprites[state] || robotSprites.stand;
}

// rain visuals
function renderRain(on) {
  if (!rainEl) return;
  rainEl.classList.toggle("on", on);
}

// expose to other files
window.Render = {
  initRender,
  renderPlayer,
  renderRobot,
  renderRain
};

// auto-init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRender);
} else {
  initRender();
}

