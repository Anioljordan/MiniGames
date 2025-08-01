
  const wheel = document.getElementById('wheel');
  const spinBtn = document.getElementById('spinBtn');
  const result = document.getElementById('result');

  const segmentCount = 12;
  const segmentAngle = 360 / segmentCount;
  const radius = 140; // distancia texto desde centro

  // Crear los textos de los segmentos
  const segments = Array.from({length: segmentCount}, (_, i) => `Reto ${i + 1}`);

  // Crear etiquetas con posicionamiento y rotación para texto legible
  segments.forEach((text, i) => {
    const label = document.createElement('div');
    label.className = 'segment-label';
    const angle = i * segmentAngle + segmentAngle / 2;
    label.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    label.textContent = text;
    wheel.appendChild(label);
  });

  let rotation = 0; // grados actuales
  let velocity = 0; // velocidad angular en grados/frame
  let spinning = false;

  function animate() {
    if (!spinning) return;

    rotation += velocity;
    rotation %= 360;

    wheel.style.transform = `rotate(${rotation}deg)`;

    // Frenar progresivamente
    velocity *= 0.97; 

    if (velocity < 0.1) {
      spinning = false;
      velocity = 0;

      // Calcular el segmento ganador (ángulo invertido para que coincida con el puntero)
// Calcular el segmento ganador (ajustar el puntero visual que está a 90°)
const offset = 90; // porque el puntero está arriba
const adjustedRotation = (rotation + offset) % 360;
const normalizedDegree = (360 - adjustedRotation) % 360;
const winningIndex = Math.floor(normalizedDegree / segmentAngle);

      result.textContent = `¡Te toca: ${segments[winningIndex]}!`;
      spinBtn.disabled = false;
    } else {
      requestAnimationFrame(animate);
    }
  }

  spinBtn.addEventListener('click', () => {
    if (spinning) return;

    spinning = true;
    spinBtn.disabled = true;
    result.textContent = '';

    // Velocidad inicial alta para giro rápido (en grados por frame)
    velocity = Math.random() * 20 + 30; // de 30 a 50 grados/frame

    requestAnimationFrame(animate);
  });

