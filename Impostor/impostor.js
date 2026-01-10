// Juego del Impostor (pass-and-play)
// - Fácil: tripulación ve palabra; impostor no ve palabra
// - Media: tripulación ve palabra; impostor ve categoría
// - Difícil: tripulación ve palabra real; impostor ve palabra falsa similar

"use strict";

const $ = (id) => document.getElementById(id);

const screens = {
  config: $("screenConfig"),
  pass: $("screenPass"),
  reveal: $("screenReveal"),
  done: $("screenDone"),
};

const ui = {
  // config
  playersCount: $("playersCount"),
  impostorsCount: $("impostorsCount"),
  difficulty: $("difficulty"),
  timeMinutes: $("timeMinutes"),
  useNames: $("useNames"),
  namesBox: $("namesBox"),
  namesTextarea: $("namesTextarea"),
  btnStart: $("btnStart"),
  btnReset: $("btnReset"),

  // pass
  passPlayerName: $("passPlayerName"),
  btnReveal: $("btnReveal"),

  // reveal
  roleTag: $("roleTag"),
  roleMain: $("roleMain"),
  secretLabel: $("secretLabel"),
  secretValue: $("secretValue"),
  categoryLine: $("categoryLine"),
  categoryValue: $("categoryValue"),
  roleBox: $("roleBox"),
  btnHide: $("btnHide"),
  btnNext: $("btnNext"),

  // done
  timeValue: $("timeValue"),
  btnPlayAgain: $("btnPlayAgain"),
  btnShowSummary: $("btnShowSummary"),
  summary: $("summary"),
  summaryWord: $("summaryWord"),
  summaryCat: $("summaryCat"),
  summaryImps: $("summaryImps"),
};

// Banco de palabras (puedes ampliar esto a lo loco)
const WORD_SETS = [
  {
    category: "Comida",
    real: "Pizza",
    fake: ["Hamburguesa", "Pasta", "Kebab"],
  },
  { category: "Comida", real: "Sushi", fake: ["Ramen", "Tacos", "Paella"] },
  { category: "Lugar", real: "Playa", fake: ["Piscina", "Montaña", "Parque"] },
  {
    category: "Lugar",
    real: "Aeropuerto",
    fake: ["Estación", "Hotel", "Centro comercial"],
  },
  {
    category: "Objeto",
    real: "Teléfono",
    fake: ["Tablet", "Portátil", "Mando"],
  },
  { category: "Objeto", real: "Gafas", fake: ["Sombrero", "Bufanda", "Reloj"] },
  { category: "Animal", real: "Perro", fake: ["Gato", "Conejo", "Zorro"] },
  { category: "Animal", real: "Delfín", fake: ["Tiburón", "Ballena", "Foca"] },
  { category: "Transporte", real: "Moto", fake: ["Bici", "Coche", "Patinete"] },
  {
    category: "Transporte",
    real: "Camper",
    fake: ["Furgoneta", "Coche", "Autobús"],
  },
  {
    category: "Película/Serie",
    real: "Harry Potter",
    fake: ["Star Wars", "Marvel", "El Señor de los Anillos"],
  },
  {
    category: "Deporte",
    real: "Baloncesto",
    fake: ["Fútbol", "Tenis", "Vóley"],
  },
];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  // Si cambias de pantalla, oculta resumen por seguridad
  ui.summary.classList.add("hidden");
}

function safeClampImpostors() {
  const players = parseInt(ui.playersCount.value, 10);
  let imps = parseInt(ui.impostorsCount.value, 10);

  const maxImps = Math.max(1, Math.min(6, players - 1));
  if (isNaN(imps)) imps = 1;
  imps = Math.max(1, Math.min(maxImps, imps));

  ui.impostorsCount.max = String(maxImps);
  ui.impostorsCount.value = String(imps);
}

ui.playersCount.addEventListener("input", safeClampImpostors);
ui.impostorsCount.addEventListener("input", safeClampImpostors);

ui.useNames.addEventListener("change", () => {
  ui.namesBox.classList.toggle("hidden", !ui.useNames.checked);
});

// Estado del juego
let game = null;

function buildPlayerList(playersCount, useNames, namesText) {
  if (!useNames) {
    return Array.from({ length: playersCount }, (_, i) => `Jugador ${i + 1}`);
  }

  const lines = namesText
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const players = [];
  for (let i = 0; i < playersCount; i++) {
    players.push(lines[i] ? lines[i] : `Jugador ${i + 1}`);
  }
  return players;
}

function newGameFromConfig() {
  const playersCount = parseInt(ui.playersCount.value, 10);
  const impostorsCount = parseInt(ui.impostorsCount.value, 10);
  const difficulty = ui.difficulty.value; // easy | medium | hard
  const timeMinutes = parseInt(ui.timeMinutes.value, 10);

  if (
    !Number.isInteger(playersCount) ||
    playersCount < 3 ||
    playersCount > 20
  ) {
    alert("El número de personas debe estar entre 3 y 20.");
    return null;
  }
  if (
    !Number.isInteger(impostorsCount) ||
    impostorsCount < 1 ||
    impostorsCount >= playersCount
  ) {
    alert(
      "El número de impostores debe ser al menos 1 y menor que el número de jugadores."
    );
    return null;
  }

  const players = buildPlayerList(
    playersCount,
    ui.useNames.checked,
    ui.namesTextarea.value
  );

  const set = WORD_SETS[randInt(0, WORD_SETS.length - 1)];
  const realWord = set.real;
  const category = set.category;
  const fakeWord = set.fake[randInt(0, set.fake.length - 1)];

  // Crear roles: true => impostor
  const flags = Array.from(
    { length: playersCount },
    (_, i) => i < impostorsCount
  );
  const shuffledFlags = shuffle(flags);

  const impostorNames = [];
  const roles = players.map((name, idx) => {
    const isImpostor = shuffledFlags[idx];
    if (isImpostor) impostorNames.push(name);
    return { name, isImpostor };
  });

  return {
    playersCount,
    impostorsCount,
    difficulty,
    timeMinutes: Number.isInteger(timeMinutes)
      ? Math.max(1, Math.min(20, timeMinutes))
      : 6,
    secret: { category, realWord, fakeWord },
    roles,
    currentIndex: 0,
    revealed: false,
    impostorNames,
  };
}

function updatePassScreen() {
  const p = game.roles[game.currentIndex];
  ui.passPlayerName.textContent = p.name;
}

function applyRevealUI(player) {
  const { category, realWord, fakeWord } = game.secret;
  const diff = game.difficulty;

  // Reset styles
  ui.roleTag.style.background = "rgba(45,212,191,.14)";
  ui.roleTag.style.borderColor = "rgba(45,212,191,.24)";

  ui.categoryLine.classList.remove("hidden");
  ui.secretLabel.textContent = "Palabra secreta";
  ui.secretValue.textContent = "—";
  ui.categoryValue.textContent = category;

  if (!player.isImpostor) {
    ui.roleTag.textContent = "No eres Impostor";
    ui.roleMain.textContent = "No eres impostor";
    ui.secretValue.textContent = realWord;
    return;
  }

  // Impostor
  ui.roleTag.textContent = "IMPOSTOR";
  ui.roleTag.style.background = "rgba(255,77,109,.14)";
  ui.roleTag.style.borderColor = "rgba(255,77,109,.28)";
  ui.roleMain.textContent = "Eres el Impostor";

  if (diff === "easy") {
    ui.secretLabel.textContent = "Información";
    ui.secretValue.textContent = "No tienes palabra 😈";
    ui.categoryLine.classList.add("hidden");
  } else if (diff === "medium") {
    ui.secretLabel.textContent = "Categoría";
    ui.secretValue.textContent = category;
    ui.categoryLine.classList.add("hidden");
  } else {
    // hard
    ui.secretLabel.textContent = "Tu palabra (puede ser falsa)";
    ui.secretValue.textContent = fakeWord;
  }
}

function goConfig() {
  game = null;
  showScreen("config");
}

function goPass() {
  game.revealed = false;
  updatePassScreen();
  showScreen("pass");
}

function goReveal() {
  const player = game.roles[game.currentIndex];
  game.revealed = true;
  applyRevealUI(player);
  showScreen("reveal");
}

function nextPlayerOrDone() {
  game.currentIndex += 1;
  if (game.currentIndex >= game.roles.length) {
    // done
    ui.timeValue.textContent = String(game.timeMinutes);
    ui.summaryWord.textContent = game.secret.realWord;
    ui.summaryCat.textContent = game.secret.category;
    ui.summaryImps.textContent = game.impostorNames.length
      ? game.impostorNames.join(", ")
      : "—";
    showScreen("done");
    return;
  }
  goPass();
}

// Eventos
ui.btnStart.addEventListener("click", () => {
  safeClampImpostors();
  const g = newGameFromConfig();
  if (!g) return;
  game = g;
  goPass();
});

ui.btnReset.addEventListener("click", () => {
  if (confirm("¿Reiniciar y volver a la configuración?")) goConfig();
});

ui.btnReveal.addEventListener("click", () => {
  if (!game) return;
  goReveal();
});

ui.btnHide.addEventListener("click", () => {
  // Volver a pantalla de pasar móvil (para que el siguiente no vea nada)
  if (!game) return;
  goPass();
});

ui.btnNext.addEventListener("click", () => {
  if (!game) return;

  // Si alguien intenta saltarse el “ver rol”, no pasa nada, pero lo permitimos.
  // Aun así, es mejor obligar a ocultar antes de pasar.
  nextPlayerOrDone();
});

ui.btnPlayAgain.addEventListener("click", () => {
  goConfig();
});

ui.btnShowSummary.addEventListener("click", () => {
  ui.summary.classList.toggle("hidden");
});

// Inicial
safeClampImpostors();
goConfig();
