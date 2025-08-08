const translations = {
  es: {
    mainTitle: "MiniJuegos",
    optionHitlerRoles: "Hitler Roles",
    optionHitlerBoard: "Hitler Tablero",
    optionYoNunca: "Yo Nunca Nunca",
    optionDrinkDear: "Drink and Dear",
  },
  ca: {
    mainTitle: "MiniJocs",
    optionHitlerRoles: "Hitler Rols",
    optionHitlerBoard: "Hitler Tauler",
    optionYoNunca: "Jo Mai Mai",
    optionDrinkDear: "Drink and Dear",
  },
  en: {
    mainTitle: "MiniGames",
    optionHitlerRoles: "Hitler Roles",
    optionHitlerBoard: "Hitler Board",
    optionYoNunca: "Never Have I Ever",
    optionDrinkDear: "Drink and Dear",
  },
};

function setLanguage(lang) {
  // Quita active de todas las banderas
  document
    .querySelectorAll(".language-selector .flag")
    .forEach((f) => f.classList.remove("active"));
  // Añade active a la seleccionada
  const selectedFlag = document.querySelector(
    `.language-selector .flag[data-lang="${lang}"]`
  );
  if (selectedFlag) selectedFlag.classList.add("active");
  // Cambia textos
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Evento para cambiar idioma al clicar la bandera
document.querySelectorAll(".language-selector .flag").forEach((flag) => {
  flag.addEventListener("click", () =>
    setLanguage(flag.getAttribute("data-lang"))
  );
});

// Detectar idioma por defecto y aplicar
window.onload = () => {
  const defaultLang = "ca"; // Catalán por defecto
  setLanguage(defaultLang);
};
