const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const stopBtn = document.getElementById("stopBtn");
const result = document.getElementById("result");

const segments = [
  "BEBES UN TRAGO",
  "REPARTES 3 TRAGOS",
  "ERES EL ESCLAVO DE TODOS DURANTE UNA RONDA",
  "MEDUSA",
  "SACO LLENO DE…",
  "BEBES DOS TRAGOS",
  "REPARTES 4 TRAGOS",
  "TE BEBES UN CHUPITO",
  "PONER UNA NORMA",
  "ZAS",
  "PONER BEBIDA EN UN VASO COMÚN",
  "SI TIENES MENOS DE LA MITAD DEL VASO, SANILARI SINO REPARTES 2 TRAGOS",
  "TE BEBES EL VASO COMÚN SI NO HAY BEBIDA, DOS TRAGOS",
];

const segmentCount = segments.length;
const segmentAngle = 360 / segmentCount;

let angle = 0;
let speed = 0;
let spinning = false;
let slowingDown = false;
let animationId = null;

// --- LOOP DE GIRO ---
function spinLoop() {
  if (!spinning) return;

  angle += speed;
  angle %= 360;
  wheel.style.transform = `rotate(${angle}deg)`;

  if (slowingDown) {
    speed *= 0.96;
    if (speed < 0.4) {
      finishSpin();
      return;
    }
  }

  animationId = requestAnimationFrame(spinLoop);
}

// --- AL ACABAR ---
function finishSpin() {
  spinning = false;
  slowingDown = false;
  cancelAnimationFrame(animationId);

  // ajuste porque la flecha apunta hacia arriba
  const offset = 90;
  const corrected = (360 - ((angle + offset) % 360)) % 360;
  const index = Math.floor(corrected / segmentAngle);
  const resultText = segments[index];

  // popup
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const popupClose = document.getElementById("popup-close");

  popupText.textContent = `¡Te toca: ${resultText}!`;
  popup.classList.remove("hidden");

  popupClose.onclick = () => {
    popup.classList.add("hidden");
    spinBtn.disabled = false;
  };
}

// --- EVENTO GIRAR ---
spinBtn.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  slowingDown = false;
  stopBtn.disabled = false;
  spinBtn.disabled = true;

  speed = Math.random() * 4 + 8; // velocidad inicial

  spinLoop();
});

// --- EVENTO PARAR ---
stopBtn.addEventListener("click", () => {
  if (!spinning || slowingDown) return;
  slowingDown = true;
  stopBtn.disabled = true;
});

// POPUP NORMAS
const rulesBtn = document.getElementById("rulesBtn");
const rulesPopup = document.getElementById("rules-popup");
const rulesClose = document.getElementById("rules-close");

rulesBtn.onclick = () => rulesPopup.classList.remove("hidden");
rulesClose.onclick = () => rulesPopup.classList.add("hidden");
