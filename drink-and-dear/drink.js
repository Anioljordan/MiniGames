
  const wheel = document.getElementById('wheel');
  const spinBtn = document.getElementById('spinBtn');
  const result = document.getElementById('result');

  const segmentCount = 13;
  const segmentAngle = 360 / segmentCount;
  const radius = 140; // distancia texto desde centro

  // Crear los textos de los segmentos
const segments = [
  "BEBES UN TRAGO",
  "BEBES DOS TRAGOS",
  "REPARTES 3 TRAGOS",
  "REPARTES 4 TRAGOS",
  "ERES EL ESCLAVO DE TODOS DURANTE UNA RONDA",
  "MEDUSA",
  "SACO LLENO DE…",
  "TE BEBES UN CHUPITO",
  "PONER UNA NORMA",
  "ZAS",
  "PONER BEBIDA EN UN VASO COMÚN",
  "TE BEBES EL VASO COMÚN SI NO HAY BEBIDA, DOS TRAGOS",
  "SI TIENES MENOS DE LA MITAD DEL VASO, SANILARI SINO REPARTES 2 TRAGOS",
];



  let rotation = 0; // grados actuales
  let velocity = 0; // velocidad angular en grados/frame
  let spinning = false;

  function animate() {
  if (!spinning) return;

  // Sumar velocidad siempre positiva para que gire sentido horario
  rotation += Math.abs(velocity);
  rotation %= 360;

  wheel.style.transform = `rotate(${rotation}deg)`;

  velocity -= 1; // desaceleración lineal
  if (velocity < 0) velocity = 0; // nunca negativo

  if (velocity === 0) {
    spinning = false;

    setTimeout(() => {
      const offset = 90; // punto fijo para calcular el segmento ganador
      const adjustedRotation = (rotation + offset) % 360;
      const normalizedDegree = (360 - adjustedRotation) % 360;
      const winningIndex = Math.floor(normalizedDegree / segmentAngle);

      const popup = document.getElementById('popup');
      const popupText = document.getElementById('popup-text');
      const popupClose = document.getElementById('popup-close');

      popupText.textContent = `¡Te toca: ${segments[winningIndex]}!`;
      popup.classList.remove('hidden');

      popupClose.onclick = () => {
        popup.classList.add('hidden');
        spinBtn.disabled = false;
      };
    }, 4000); // o el tiempo que quieras
  } else {
    requestAnimationFrame(animate);
  }
}

spinBtn.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  result.textContent = '';

  // Velocidad inicial siempre positiva
  velocity = Math.random() * 40 + 60; // de 60 a 100 grados/frame

  requestAnimationFrame(animate);
});


spinBtn.addEventListener('click', () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  result.textContent = '';

  velocity = Math.random() * 20 + 30; // de 30 a 50 grados/frame

  requestAnimationFrame(animate);
});


  spinBtn.addEventListener('click', () => {
    if (spinning) return;

    spinning = true;
    spinBtn.disabled = true;
    result.textContent = '';

    // Velocidad inicial alta para giro rápido (en grados por frame)
    velocity = Math.random() * 20 + 30; // de 30 a 50 grados/frame

    requestAnimationFrame(animate);
  });


  const rulesBtn = document.getElementById('rulesBtn');
  const rulesPopup = document.getElementById('rules-popup');
  const rulesClose = document.getElementById('rules-close');

  rulesBtn.onclick = () => {
    rulesPopup.classList.remove('hidden');
  };

  rulesClose.onclick = () => {
    rulesPopup.classList.add('hidden');
  };



