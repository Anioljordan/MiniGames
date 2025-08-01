const translations = {
  es: {
    playersTitle: "Jugadores",
    playerPlaceholder: "Jugador ",
    addPlayerBtn: "Añadir jugador",
    startBtn: "Empezar",
    clickNameRole: "Haz clic en tu nombre para ver tu rol",
    closeBtn: "Cerrar",
    roleText: "Tu rol es: ",
    maxPlayersAlert: "Máximo 10 jugadores",
    minPlayersAlert: "Se necesitan al menos 5 jugadores.",
    removePlayerBtn: "Eliminar jugador",
    roles: {
      fascista: "Fascista",
      hitler: "Hitler",
      liberal: "Liberal"
    }
  },
  ca: {
    playersTitle: "Jugadors",
    playerPlaceholder: "Jugador ",
    addPlayerBtn: "Afegir jugador",
    startBtn: "Començar",
    clickNameRole: "Fes clic al teu nom per veure el teu rol",
    closeBtn: "Tancar",
    roleText: "El teu rol és: ",
    maxPlayersAlert: "Màxim 10 jugadors",
    minPlayersAlert: "Calen almenys 5 jugadors.",
    removePlayerBtn: "Eliminar jugador",
    roles: {
      fascista: "Fascista",
      hitler: "Hitler",
      liberal: "Liberal"
    }
  },
  en: {
    playersTitle: "Players",
    playerPlaceholder: "Player ",
    addPlayerBtn: "Add player",
    startBtn: "Start",
    clickNameRole: "Click your name to see your role",
    closeBtn: "Close",
    roleText: "Your role is: ",
    maxPlayersAlert: "Maximum 10 players",
    minPlayersAlert: "At least 5 players are needed.",
    removePlayerBtn: "Remove player",
    roles: {
      fascista: "Fascist",
      hitler: "Hitler",
      liberal: "Liberal"
    }
  }
};


function setLanguage(lang) {
  // Actualiza el valor del select si existe (opcional)
  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;

  // Cambia el idioma con el parámetro correcto
  changeLanguage(lang);

  // Quita la clase active de todas las banderas
  document.querySelectorAll(".language-selector .flag").forEach(flag => {
    flag.classList.remove("active");
  });

  // Añade la clase active a la bandera seleccionada
  const selectedFlag = document.querySelector(`.language-selector .flag[data-lang="${lang}"]`);
  if (selectedFlag) {
    selectedFlag.classList.add("active");
  }
}

function changeLanguage(lang = null) {
  if (!lang) {
    lang = document.querySelector(".language-selector .flag.active")?.getAttribute("data-lang") || 'es';
  }

  // Actualiza textos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Actualiza placeholders con data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      if (!el.value) el.placeholder = translations[lang][key] + (getInputIndex(el) + 1);
    }
  });
}

// Helper para obtener índice del input en #players
function getInputIndex(input) {
  const inputs = Array.from(document.querySelectorAll("#players input"));
  return inputs.indexOf(input);
}

// Modifica showModal para usar traducción del texto "Tu rol es:"
const originalShowModal = showModal;
showModal = function(name, role) {
  const lang = document.querySelector(".language-selector .flag.active")?.getAttribute("data-lang") || 'es';
  document.getElementById("modalPlayerName").textContent = name;
  document.getElementById("modalPlayerRole").textContent = translations[lang].roleText + role;
  document.getElementById("roleModal").style.display = "flex";
};

