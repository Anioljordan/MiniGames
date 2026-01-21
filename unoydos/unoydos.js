// =========================
// 1. Retos
// =========================

const fiesta = [
  "Que el 1 dé 5 vueltas sobre sí mismo y luego le dé de beber al 2 de su cubata.",
  "Que el 2 le haga un brindis épico al 1 y luego le dé 3 sorbos de su bebida.",
  "Que el 1 le sirva la copa al 2 con la mano no dominante sin tirar ni una gota. Si tira, bebe 2 tragos.",
  "Que el 2 le dé de beber al 1 mirándole fijamente a los ojos durante 5 segundos.",
  "Que el 1 le haga un baile tonto al 2 y termine dándole un trago de su bebida.",
  "Que el 2 le dé un abrazo al 1 y luego le deje elegir cuántos tragos bebe (máximo 3).",
  "Que el 1 se arrodille frente al 2 y le haga un brindis dramático antes de darle 2 tragos.",
  "Que el 2 le cambie el vaso al 1 y le haga beber un trago sin quejarse.",
  "Que el 1 le dé al 2 un sorbo cada vez que diga una palabra prohibida durante la próxima ronda.",
  "Que el 2 le haga al 1 una pregunta incómoda; si responde, el 2 bebe 2 tragos, si no, bebe el 1.",
  "Que el 1 imite borracho al 2 durante 10 segundos y luego le dé un trago.",
  "Que el 2 elija una persona para que dé un trago por el 1 y luego el 2 también beba.",
  "Que el 1 haga un brindis por el 2 contando una anécdota suya y luego le dé 2 tragos.",
  "Que el 2 haga una mini pasarela delante del 1 y al final el 1 le dé un trago.",
  "Que el 1 le dé al 2 de beber con los ojos cerrados sin derramar nada. Si derrama, bebe también él.",
  "Que el 2 elija una palabra prohibida para el 1; si la dice, el 2 le da 2 tragos.",
  "Que el 1 y el 2 choquen vasos y luego el 1 le dé un trago al 2 al grito de ¡FIESTA!",
  "Que el 2 le enseñe su mejor paso de baile al 1 y luego el 1 beba 2 tragos.",
  "Que el 1 le susurre un cumplido al oído al 2 y luego le dé de beber.",
  "Que el 2 elija una persona para que beba por el 1, pero el 2 también tiene que beber 1 trago.",
  "Que el 1 haga como camarero y le rellene la copa al 2 (o haga que parezca) y luego el 2 beba.",
  "Que el 2 le haga un ‘cheers’ exagerado al 1 y se beban un trago a la vez.",
  "Que el 1 tenga que contar hasta 10 con acento raro; si se equivoca, el 2 le da 2 tragos.",
  "Que el 2 tenga que hacer una imitación del 1 borracho; luego el 1 le da un trago.",
  "Que el 1 elija una regla absurda para el 2 hasta la próxima ronda; si la rompe, bebe el 2.",
  "Que el 2 diga algo vergonzoso del 1 (si el 1 lo confirma, bebe el 2; si no, bebe el 1).",
  "Que el 1 cante un trozo de canción al 2; si el grupo aplaude, bebe el 2, si no, bebe el 1.",
  "Que el 2 haga girar al 1 una vez y luego le dé un trago mientras aún esté mareado.",
  "Que el 1 elija si el 2 bebe 1, 2 o 3 tragos (tiene que justificar el motivo).",
  "Que el 2 le prepare al 1 un brindis motivacional y luego el 1 beba 2 tragos.",
  "Que el 1 y el 2 se choquen la frente suavemente y luego el 1 le dé un trago al 2.",
  "Que el 2 tenga que decir tres cosas buenas del 1; si se queda en blanco, bebe 2 tragos.",
  "Que el 1 haga una pose ridícula y el 2 tenga que copiarla; luego el 1 le da de beber al 2.",
  "Que el 2 elija una persona para que le dé un trago al 1 mientras él mira y se ríe.",
  "Que el 1 se haga el DJ y pida una canción en honor al 2; cuando suene, el 2 bebe 2 tragos.",
  "Que el 2 cierre los ojos y el 1 le dé un trago sorpresa (de su bebida, obvio).",
  "Que el 1 haga como si estuviera en un anuncio de alcohol presentando al 2 como la estrella y luego le dé un trago.",
  "Que el 2 haga una reverencia al 1 y luego este le dé 2 tragos como recompensa.",
  "Que el 1 y el 2 se miren fijamente 5 segundos; el primero que se ría bebe 2 tragos del otro.",
  "Que el 2 tenga que inventarse un brindis absurdo para el 1 y luego los dos beben.",
  "Que el 1 haga girar al 2 y luego lo guíe hasta su vaso y le dé un trago.",
  "Que el 2 le pregunte al 1 una verdad incómoda; si no responde, el 2 le da 2 tragos.",
  "Que el 1 le dé al 2 un trago cada vez que alguien diga ‘sí’ en la próxima ronda.",
  "Que el 2 le cambie la bebida al 1 por otra del grupo (con su permiso) y el 1 beba un trago.",
  "Que el 1 haga como si entrevistara al 2 en un programa de fiesta y al final le dé de beber.",
  "Que el 2 tenga que halagar al 1 de la forma más exagerada posible y luego el 1 le dé un trago.",
  "Que el 1 y el 2 choquen vasos cruzando los brazos y luego beban al mismo tiempo.",
  "Que el 2 decida si el 1 bebe ahora 3 tragos o 1 trago en cada una de las próximas 3 rondas.",
];

const chill = [
  "Que el 1 dé 5 vueltas y luego choque la mano del 2 como si hubieran ganado algo.",
  "Que el 2 haga un abrazo oso al 1 durante 3 segundos.",
  "Que el 1 le haga al 2 su mejor cara rara durante 5 segundos.",
  "Que el 2 le dedique al 1 un cumplido totalmente exagerado.",
  "Que el 1 imite al 2 caminando durante 10 pasos.",
  "Que el 2 le haga al 1 una mini coreografía de 5 segundos.",
  "Que el 1 le cuente al 2 una anécdota graciosa (real o inventada).",
  "Que el 2 le haga al 1 una pregunta profunda de la vida.",
  "Que el 1 y el 2 se miren fijamente; el primero que se ría tiene que hacer una pose ridícula.",
  "Que el 2 copie exactamente la cara que ponga el 1 durante 5 segundos.",
  "Que el 1 le haga un choque de manos épico al 2 como si hubieran ganado una final.",
  "Que el 2 le cuente al 1 algo que le guste mucho de él.",
  "Que el 1 haga de estatua y el 2 tenga que colocarlo en una pose graciosa.",
  "Que el 2 describa al 1 como si fuera un personaje de película.",
  "Que el 1 intente cantar una canción al 2 sin equivocarse; si se equivoca, hace un baile tonto.",
  "Que el 2 le haga al 1 una pregunta de ‘verdad’ tipo juego de verdad o reto.",
  "Que el 1 haga que el 2 se ría sin hablar (solo con gestos) en 10 segundos.",
  "Que el 2 le invente al 1 un apodo cariñoso y lo use durante 3 rondas.",
  "Que el 1 le haga al 2 una mini entrevista como si fuera famoso.",
  "Que el 2 tenga que contar algo vergonzoso (pero light) que haya hecho el 1 (o que se imagine).",
  "Que el 1 y el 2 se choquen los hombros suavemente y digan al mismo tiempo ‘equipo’.",
  "Que el 2 le enseñe al 1 su mejor paso de baile y el 1 tenga que copiarlo.",
  "Que el 1 le haga una pregunta random al 2 tipo ‘¿qué superpoder tendrías?’.",
  "Que el 2 imite la risa del 1 durante 5 segundos.",
  "Que el 1 dibuje algo en el aire y el 2 tenga que adivinar qué es.",
  "Que el 2 le cuente al 1 qué fue lo primero que pensó de él cuando lo conoció.",
  "Que el 1 y el 2 choquen puños y luego inventen un saludo secreto rápido.",
  "Que el 2 tenga que decir al menos 3 cosas que el 1 hace bien.",
  "Que el 1 le haga al 2 una predicción absurda sobre su futuro.",
  "Que el 2 haga una pasarela improvisada mientras el 1 comenta como si fuera jurado.",
  "Que el 1 ponga una cara seria y el 2 intente hacerle reír en menos de 10 segundos.",
  "Que el 2 le cuente al 1 algo que nunca le haya contado (aunque sea una chorrada).",
  "Que el 1 se invente una mini historia de 15 segundos donde el 2 es el protagonista.",
  "Que el 2 tenga que elegir una canción que represente al 1 (aunque sea inventada).",
  "Que el 1 y el 2 se den un choque de codos como si fueran dos superhéroes.",
  "Que el 2 intente imitar cómo habla el 1 durante una frase completa.",
  "Que el 1 se gire de espaldas y el 2 tenga que describirle un objeto de la sala para que lo adivine.",
  "Que el 2 le haga al 1 una pregunta del tipo ‘¿qué harías si…?’ y escuche la respuesta sin interrumpir.",
  "Que el 1 le enseñe al 2 su mejor ‘pose de foto’ y el 2 tenga que replicarla.",
  "Que el 2 le diga al 1 qué cosa cree que a todo el mundo le gusta de él.",
  "Que el 1 tenga que inventar un lema de vida para el 2.",
  "Que el 2 tenga que contar una situación en la que habría necesitado al 1.",
  "Que el 1 y el 2 choquen las manos 3 veces y digan algo distinto cada vez.",
  "Que el 2 le diga al 1 qué tipo de personaje sería en una serie (prota, villano, cómico...).",
  "Que el 1 tenga que hacer una imitación de alguien famoso para el 2.",
  "Que el 2 le haga al 1 una lista de 3 cosas que deberían hacer juntos algún día.",
  "Que el 1 describa al 2 solo con 3 palabras.",
  "Que el 2 tenga que inventar un slogan para el 1 como si fuera una marca.",
  "Que el 1 y el 2 intenten sincronizar un aplauso a la vez sin contar.",
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
// 3. LocalStorage por modo (con prefijo de juego)
// =========================

const GAME_PREFIX = "RETOS_";

function storageKey(key) {
  return `${GAME_PREFIX}${modo}_${key}`;
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
    phraseContainer.textContent = "Pulsa el botón para empezar el reto";
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
// 6. Reto random sin repetir
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
    currentPhrase = "¡Se acabaron los retos!";
  }
  phraseContainer.textContent = currentPhrase;
  saveGame();
});

// =========================
// 8. Resetear
// =========================

resetBtn.addEventListener("click", () => {
  remainingPhrases = [...phrases];
  currentPhrase = "Pulsa el botón para empezar el reto";
  phraseContainer.textContent = currentPhrase;
  saveGame();
});

// =========================
// 9. Cambiar de modo
// =========================

function setModo(nuevo) {
  modo = nuevo;
  phrases = modo === "fiesta" ? fiesta : chill;
  remainingPhrases = [...phrases]; // opcional: reset al cambiar modo
  currentPhrase = "Pulsa el botón para empezar el reto";
  phraseContainer.textContent = currentPhrase;
  saveGame();

  // Actualizar visual de botones
  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelector(`.mode-btn[data-mode="${nuevo}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
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
