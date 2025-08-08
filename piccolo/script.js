const phrases = [
  "Quien es mas probable que mate al de su izquierda por 1.000.000€, el jugador mas votado bebe 3 tragos?",
  "A la de 3 todos señalan al jugador con mas cara de pervertido, el jugador mas señalado reparte 4 tragos",
  "A la de 3 todos señalan al jugador mas romantico, el jugador mas señalado bebe 4 tragos",
  "A la de 3 todos señalan al jugador que creen que lleva la ropa interior mas sexy, el jugador mas señalado bebe 2 tragos",
  "Quien es mas probable que se case por dinero, el jugador mas votado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que llegara mas lejos en la vida, el jugador mas señalado reparte 3 tragos",
  "Quien es mas probable que hoy vomite, el jugador mas votado bebe 1 trago de agua y reparte los tragos que el quiera",
  "A la de 3 todos señalan al jugador mas guapo/a, el jugador mas señalado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que hace mejor el amor, el jugador mas señalado bebe 5 tragos",
  "A la de 3 todos señalan a un jugador y hace un sanilari.",
  "Quien es mas probable que le echen de una discoteca, el jugador mas votado bebe 2 tragos",
  "El ultimo en levantar la mano bebe 3 tragos",
  "Quien es mas probable que llegue a los 30 años soltero/a, el jugador mas votado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que esta mas bueno, el jugador mas señalado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que es mas inteligente, el jugador mas señalado reparte 2 tragos",
  "A la de 3 todos señalan al jugador que creen que es mas gracioso, el jugador mas señalado reparte 2 tragos",
  "A la de 3 todos señalan al jugador que vista peor, el jugador mas señalado bebe 2 tragos",
  "A la de 3 todos señalan a los jugadores que tienen mas posibilidades de tener relaciones sexuales esta noche (no valen parejas), los jugadores señalados se dan un pico",
  "A la de 3 todos señalan al jugador mas tardon, el jugador mas señalado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que es mas probable que duerma acompañado esta noche, el jugador mas señalado bebe 2 tragos",
  "A la de 3 todos señalan al jugador con más pinta de criminal, el jugador más señalado bebe 4 tragos.",

  "¿Quién es más probable que se duerma en una fiesta? El jugador más votado bebe 3 tragos.",

  "A la de 3 todos señalan al jugador que creen que ligaría incluso en un funeral, el jugador más señalado reparte 3 tragos.",

  "¿Quién es más probable que mande un audio borracho esta noche? El jugador más votado bebe 2 tragos.",

  "A la de 3 todos señalan al jugador con más pinta de infiel, el jugador más señalado bebe 5 tragos.",

  "¿Quién es más probable que se pierda y no vuelva? El jugador más votado bebe 3 tragos.",

  "A la de 3 todos señalan al jugador que creen que aguanta menos el alcohol, el jugador más señalado bebe 2 tragos.",

  "¿Quién es más probable que se pelee esta noche? El jugador más votado reparte 4 tragos.",

  "A la de 3 todos señalan al jugador que creen que tiene más ex, el jugador más señalado bebe 3 tragos.",

  "¿Quién es más probable que se vaya sin pagar? El jugador más votado bebe 2 tragos.",

  "A la de 3 todos señalan al jugador que creen que es más probable que llore esta noche, el jugador más señalado bebe 2 tragos.",

  "¿Quién es más probable que desaparezca y vuelva con comida? El jugador más votado reparte 3 tragos.",

  "A la de 3 todos señalan al jugador que creen que más rápido acabaría en la cárcel, el jugador más señalado bebe 4 tragos.",

  "¿Quién es más probable que se enamore en una noche? El jugador más votado bebe 2 tragos.",

  "A la de 3 todos señalan al jugador que creen que más veces ha mentido hoy, el jugador más señalado reparte 2 tragos.",

  "A la de 3 todos señalan al jugador que creen que tiene el peor gusto musical, el jugador más señalado bebe 3 tragos.",

  "¿Quién es más probable que pierda el móvil esta noche? El jugador más votado reparte 3 tragos.",

  "A la de 3 todos señalan al jugador que creen que tiene más secretos, el jugador más señalado bebe 2 tragos.",

  "A la de 3 todos señalan al jugador que creen que ha tenido más parejas, el jugador más señalado bebe 3 tragos",
  "¿Quién es más probable que grabe un vídeo sexual? El jugador más votado bebe 4 tragos",
  "A la de 3 todos señalan al jugador que creen que lo hace más salvaje en la cama, el jugador más señalado reparte 4 tragos",
  "A la de 3 todos señalan al jugador que creen que lo hace mejor oralmente, el jugador más señalado bebe 5 tragos",
  "¿Quién es más probable que tenga sexo en un lugar público? El jugador más votado reparte 3 tragos",
  "A la de 3 todos señalan al jugador que creen que más veces ha fingido un orgasmo, el jugador más señalado bebe 2 tragos",
  "¿Quién es más probable que se acueste con alguien por despecho? El jugador más votado bebe 3 tragos",
  "A la de 3 todos señalan al jugador que creen que más rápido se desnudaría por dinero, el jugador más señalado reparte 4 tragos",
  "¿Quién es más probable que mande nudes? El jugador más votado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que ha tenido sexo en más sitios raros, el jugador más señalado bebe 3 tragos",
  "¿Quién es más probable que haya hecho un trío? El jugador más votado reparte 4 tragos",
  "A la de 3 todos señalan al jugador que creen que más rápido se enamora después de una noche, el jugador más señalado bebe 2 tragos",
  "¿Quién es más probable que practique sexting ahora mismo? El jugador más votado bebe 3 tragos",
  "A la de 3 todos señalan al jugador que creen que es más dominante en la cama, el jugador más señalado reparte 3 tragos",
  "¿Quién es más probable que se acueste con un ex? El jugador más votado bebe 2 tragos",
  "A la de 3 todos señalan al jugador que creen que más veces ha tenido sexo sin recordar el nombre, el jugador más señalado bebe 4 tragos",
  "¿Quién es más probable que haya mentido sobre con cuántas personas ha estado? El jugador más votado reparte 2 tragos",
  "A la de 3 todos señalan al jugador que creen que es más probable que tenga una aventura con alguien mucho mayor, el jugador más señalado bebe 3 tragos",
  "¿Quién es más probable que tenga sexo esta noche? El jugador más votado bebe 5 tragos",
];

const phraseContainer = document.getElementById("phrase-container");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

// Copia de las frases para ir sacando sin repetir
let remainingPhrases = [];

// Función para resetear y preparar el array de frases
function resetPhrases() {
  remainingPhrases = [...phrases]; // copia del array original
  phraseContainer.textContent = "Pulsa el botón para empezar";
}

// Función para obtener una frase aleatoria sin repetir
function getRandomPhraseNoRepeat() {
  if (remainingPhrases.length === 0) {
    return null; // no quedan frases
  }
  // Selecciona índice aleatorio en las frases restantes
  const idx = Math.floor(Math.random() * remainingPhrases.length);
  // Saca la frase y la elimina del array
  const phrase = remainingPhrases.splice(idx, 1)[0];
  return phrase;
}

// Evento botón siguiente
nextBtn.addEventListener("click", () => {
  const phrase = getRandomPhraseNoRepeat();
  if (phrase) {
    phraseContainer.textContent = phrase;
  } else {
    phraseContainer.textContent = "¡Se acabaron las preguntas!";
  }
});

// Evento botón reset
resetBtn.addEventListener("click", () => {
  resetPhrases();
});

// Inicializamos
resetPhrases();

//modal
const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeModal = document.getElementById("closeModal");

// Abrir modal al pulsar normas
rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

// Cerrar modal al pulsar la X
closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === rulesModal) {
    rulesModal.style.display = "none";
  }
});
