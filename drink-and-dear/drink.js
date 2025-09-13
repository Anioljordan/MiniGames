const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const segmentCount = 13;
const segmentAngle = 360 / segmentCount;
const radius = 140; // distancia texto desde centro

// Crear los textos de los segmentos
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

let rotation = 0;
let velocity = 0; // grados por segundo
let spinning = false;
let lastTimestamp = null;

function animate(timestamp) {
  if (!spinning) return;

  if (!lastTimestamp) lastTimestamp = timestamp;
  const deltaTime = (timestamp - lastTimestamp) / 1000; // en segundos
  lastTimestamp = timestamp;

  rotation += velocity * deltaTime;
  rotation %= 360;
  wheel.style.transform = `rotate(${rotation}deg)`;

  // Desacelerar (pierde un 5% por segundo)
  velocity *= 0.987; // se frena más lento, gira más tiempo

  if (velocity < 5) {
    velocity = 0;
    spinning = false;
    lastTimestamp = null;

    setTimeout(() => {
      const offset = 90;
      const adjustedRotation = (rotation + offset) % 360;
      const normalizedDegree = (360 - adjustedRotation) % 360;
      const winningIndex = Math.floor(normalizedDegree / segmentAngle);

      const popup = document.getElementById("popup");
      const popupText = document.getElementById("popup-text");
      const popupClose = document.getElementById("popup-close");

      popupText.textContent = `¡Te toca: ${segments[winningIndex]}!`;
      popup.classList.remove("hidden");

      popupClose.onclick = () => {
        popup.classList.add("hidden");
        spinBtn.disabled = false;
      };
    }, 500); // opcional: pequeña pausa antes del popup
  } else {
    requestAnimationFrame(animate);
  }
}

spinBtn.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  result.textContent = "";

  velocity = Math.random() * 360 + 720; // entre 720 y 1080 grados/seg = 2 a 3 vueltas/seg

  lastTimestamp = null;

  requestAnimationFrame(animate);
});

const rulesBtn = document.getElementById("rulesBtn");
const rulesPopup = document.getElementById("rules-popup");
const rulesClose = document.getElementById("rules-close");

rulesBtn.onclick = () => {
  rulesPopup.classList.remove("hidden");
};
rulesClose.onclick = () => {
  rulesPopup.classList.add("hidden");
};


