let doomCount = 0;
let lastTriggerTime = 0;
const COOLDOWN_MS = 5000;

const roasts = [
  "drop the phone!",
  "Doomscroll detected.",
  "Was it really that important?",
  "Phone usage detected."
];

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 0.8;
  utterance.volume = 1;
  speechSynthesis.speak(utterance);
}

function behaviorLoop() {
  const now = Date.now();

  if (window.phoneDetected && now - lastTriggerTime > COOLDOWN_MS) {
    doomCount++;
    lastTriggerTime = now;

    const roast =
      roasts[Math.floor(Math.random() * roasts.length)];

    speak(roast);
    console.log("Doomscroll count:", doomCount);
  }

  requestAnimationFrame(behaviorLoop);
}

behaviorLoop();
