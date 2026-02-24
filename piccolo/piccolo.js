// =========================
// 1. Preguntas
// =========================

const fiesta = [
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
  "Quien tiene talentos mas absurdos. La persona bebe 3 tragos",
  "Quien es mas probable que se lie con alguien y no se acuerde la mañana siguiente. La persona bebe dos tragos.",
  "Quien es mas probable que le despidan mas rapido en un trabajo nuevo. La persona mas votada bebe 4 tragos.",
];

const chill = [
  "¿Quién es más probable que se duerma en una conversación?",
  "¿Quién es más probable que acabe una noche en el calabozo?",
  "Quién es más probable que se le queme la cocina preparando algo de comer?",
  "¿Quién es más probable que no organice nada de un viaje?",
  "Quién es más probable que tenga mas deudas?",
  "¿Quién es más probable que pierda el móvil 3 veces al día?",
  "A la de 3 todos señalan al jugador más organizado.",
  "A la de 3 todos señalan al jugador más caótico.",
  "¿Quién es más probable que se haga famoso sin querer?",
  "¿Quién es más probable que adopte 7 gatos?",
  "¿Quién es más probable que desaparezca y vuelva con snacks?",
  "¿Quién es más probable que sobreviva mejor a un apocalipsis?",
  "¿Quién es más probable que llegue tarde a todo?",
  "¿Quién es más probable que se olvide del cumpleaños de un amigo?",
  "A la de 3 todos señalan al jugador con mejor estilo.",
  "A la de 3 todos señalan al jugador con peor sentido de la orientación.",
  "¿Quién es más probable que sea el último en contestar mensajes?",
  "¿Quién es más probable que haga amistad con un desconocido?",
  "¿Quién es más probable que llore con una película?",
  "¿Quién es más probable que se ría en un funeral?",
  "¿Quién es más probable que termine viviendo en otro país?",
  "¿Quién es más probable que cambie de carrera 5 veces?",
  "¿Quién es más probable que viaje sin planear nada?",
  "¿Quién es más probable que hable con animales?",
  "A la de 3 todos señalan al jugador más dramático.",
  "A la de 3 todos señalan al jugador menos dramático.",
  "¿Quién es más probable que gane una discusión?",
  "¿Quién es más probable que la pierda?",
  "¿Quién es más probable que tenga un hobby raro?",
  "¿Quién es más probable que tenga un crush imposible?",
  "¿Quién es más probable que acabe siendo influencer?",
  "¿Quién es más probable que abandone las redes?",
  "¿Quién es más probable que se haga millonario?",
  "¿Quién es más probable que lo pierda todo?",
  "A la de 3 señalen al jugador con mejor memoria.",
  "A la de 3 señalen al jugador con peor memoria.",
  "¿Quién es más probable que termine viviendo en una cabaña en el bosque?",
  "¿Quién es más probable que tenga una crisis existencial a las 3am?",
  "¿Quién es más probable que sea el narrador del grupo?",
  "¿Quién es más probable que sea el meme del grupo?",
  "¿Quién es más probable que sea presidente?",
  "¿Quién es más probable que olvide dónde dejó las llaves?",
  "¿Quién es más probable que adopte un perro callejero?",
  "¿Quién es más probable que coleccione cosas raras?",
  "¿Quién es más probable que se una a un culto por curiosidad?",
  "¿Quién es más probable que se ría solo viendo el móvil?",
  "¿Quién es más probable que vea documentales para dormir?",
  "¿Quién es más probable que nunca termine un libro?",
  "A la de 3 señalen al jugador más competitivo.",
  "A la de 3 señalen al jugador más pacífico.",
  "¿Quién es más probable que se meta en problemas sin querer?",
  "¿Quién es más probable que tenga muchas historias random?",
  "¿Quién es más probable que olvide lo que está diciendo?",
  "¿Quién es más probable que haga un viaje espiritual?",
  "¿Quién es más probable que compre cosas inútiles?",
];

// =========================
// 2. Estado del juego
// =========================

let modo = "fiesta";
let phrases = fiesta;

let remainingPhrases = [];
let currentPhrase = "";

const phraseContainer = document.getElementById("phrase-container");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

// =========================
// 3. LocalStorage por modo
// =========================

function storageKey(key) {
  return `${modo}_${key}`;
}

// =========================
// 4. Cargar partida
// =========================

function loadGame() {
  const savedPhrases = localStorage.getItem(storageKey("remainingPhrases"));
  const savedCurrentPhrase = localStorage.getItem(storageKey("currentPhrase"));

  if (savedPhrases) {
    remainingPhrases = JSON.parse(savedPhrases);
  } else {
    remainingPhrases = [...phrases];
  }

  if (savedCurrentPhrase) {
    currentPhrase = savedCurrentPhrase;
    phraseContainer.textContent = currentPhrase;
  } else {
    phraseContainer.textContent = "Pulsa el botón para empezar";
  }
}

// =========================
// 5. Guardar partida
// =========================

function saveGame() {
  localStorage.setItem(
    storageKey("remainingPhrases"),
    JSON.stringify(remainingPhrases),
  );
  localStorage.setItem(storageKey("currentPhrase"), currentPhrase);
}

// =========================
// 6. Frase random
// =========================

function getRandomPhraseNoRepeat() {
  if (remainingPhrases.length === 0) return null;
  const idx = Math.floor(Math.random() * remainingPhrases.length);
  return remainingPhrases.splice(idx, 1)[0];
}

// =========================
// 7. Botón siguiente
// =========================

nextBtn.addEventListener("click", () => {
  const phrase = getRandomPhraseNoRepeat();
  if (phrase) {
    currentPhrase = phrase;
  } else {
    currentPhrase = "¡Se acabaron las preguntas!";
  }
  phraseContainer.textContent = currentPhrase;
  saveGame();
});

// =========================
// 8. Resetear
// =========================

resetBtn.addEventListener("click", () => {
  remainingPhrases = [...phrases];
  currentPhrase = "Pulsa el botón para empezar";
  phraseContainer.textContent = currentPhrase;
  saveGame();
});

// =========================
// 9. Cambiar de modo
// =========================

function setModo(nuevo) {
  modo = nuevo;
  phrases = modo === "fiesta" ? fiesta : chill;
  loadGame();
  // Actualizar visual de botones
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`.mode-btn[data-mode="${nuevo}"]`)
    .classList.add("active");
}

// =========================
// 10. Modal de reglas
// =========================

const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeModal = document.getElementById("closeModal");

rulesBtn.addEventListener("click", () => (rulesModal.style.display = "block"));
closeModal.addEventListener("click", () => (rulesModal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === rulesModal) rulesModal.style.display = "none";
});

// =========================
// 11. Inicio
// =========================

loadGame();
