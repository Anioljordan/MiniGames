/* =========================
   TRANSLATIONS DICTIONARY
========================= */
const translations = {
  es: {
    mainTitle: "MiniJuegos para Beber",
    optionYoNunca: "Yo Nunca Nunca",
    optionDrinkDear: "Señala y Bebe",
    unoy2: "1 y 2",
    optionTruthOrDare: "Prueba o Verdad",
    optionDrinkAndDear: "Drink and Dare",
    optionImpostor: "Juego del Impostor",
    optionImpostor: "Impostor",
    optionHitler: "Hitler",
    footerCreatedBy: "Creado por Aniol Jordán",
    // ===== extras home =====
    mainSubtitle: "Elige un juego y pásalo brutal 🍻",
    ctaPlay: "Jugar",
    ctaOpen: "Abrir",

    tagRapid: "Rápido",
    tagChaos: "Caos",
    tagParty: "Fiesta",
    tagClassic: "Clásico",
    tagTurns: "Turnos",
    tagRoulette: "Ruleta",
    tagOnePhone: "1 móvil",
    tagBoard: "Tablero",

    optionTimerMortal: "Temporizador Mortal",
    descTimerMortal: "Reto + cuenta atrás random. Si llega a 0… bebes.",
    optionUltimatum: "El Ultimátum",
    descUltimatum: "Dos opciones. Elige… o el grupo decide por ti 😈",
    optionKing: "El Rey",
    descKing: "Un rey por ronda. Reparte tragos, normas y castigos.",

    descYoNunca: "Confesiones rápidas. Si has hecho… bebes.",
    descPiccolo: "Señalas. Alguien cumple. Y alguien bebe.",
    descUnoydos: "Ojos tapados, señalas, y sale el reto.",
    descTruth: "Verdad incómoda o prueba legendaria.",
    descDrinkAndDare: "Gira, frena y acepta el destino 😈",
    descImpostor: "Roles secretos. Preguntas. Pillad al impostor.",
    descHitler: "Roles, faroles, tablero y puro drama.",

    hintMobile: "Mejor en móvil",
    hintOffline: "Funciona offline",
    hintPlayers: "3–12 jugadores",
  },

  en: {
    mainTitle: "Drinking MiniGames",
    optionYoNunca: "Never Have I Ever",
    optionDrinkDear: "Point and Drink",
    unoy2: "1 and 2",
    optionTruthOrDare: "Truth or Dare",
    optionDrinkAndDear: "Drink and Dare",
    optionImpostor: "Impostor",
    optionHitler: "Hitler",
    footerCreatedBy: "Created by Aniol Jordán",
    mainSubtitle: "Pick a game and make it legendary 🍻",
    ctaPlay: "Play",
    ctaOpen: "Open",

    tagRapid: "Fast",
    tagChaos: "Chaos",
    tagParty: "Party",
    tagClassic: "Classic",
    tagTurns: "Turns",
    tagRoulette: "Roulette",
    tagOnePhone: "1 phone",
    tagBoard: "Board",

    optionTimerMortal: "Death Timer",
    descTimerMortal: "Challenge + random countdown. If it hits 0… you drink.",
    optionUltimatum: "The Ultimatum",
    descUltimatum: "Two choices. Pick one… or the group chooses 😈",
    optionKing: "The King",
    descKing: "One king per round. Gives drinks, rules and punishments.",

    descYoNunca: "Quick confessions. If you’ve done it… you drink.",
    descPiccolo: "Point. Someone does it. Someone drinks.",
    descUnoydos: "Eyes covered, point… and chaos happens.",
    descTruth: "An awkward truth or a legendary dare.",
    descDrinkAndDare: "Spin it, stop it, accept your fate 😈",
    descImpostor: "Secret roles. Questions. Catch the impostor.",
    descHitler: "Roles, bluffs, board and pure drama.",

    hintMobile: "Best on mobile",
    hintOffline: "Works offline",
    hintPlayers: "3–12 players",
  },
};

/* =========================
   LANGUAGE SYSTEM
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const flags = document.querySelectorAll(".flag[data-lang]");

  // Idioma guardado o por defecto
  const savedLang = localStorage.getItem("lang") || "es";
  applyLanguage(savedLang);

  // Click en bandera
  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      const lang = flag.dataset.lang;
      applyLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });
});

/**
 * Aplica idioma a la UI
 */
function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;

  // <html lang="xx">
  document.documentElement.lang = lang;

  // Flag activa (da igual el contenedor)
  document.querySelectorAll(".flag[data-lang]").forEach((flag) => {
    const isActive = flag.dataset.lang === lang;
    flag.classList.toggle("active", isActive);
    flag.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Traducir todos los data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = dict[key];

    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  // Footer especial (si existe)
  const footerP = document.querySelector(".footer-content p");
  if (footerP && typeof dict.footerCreatedBy === "string") {
    footerP.textContent = dict.footerCreatedBy;
  }
}
