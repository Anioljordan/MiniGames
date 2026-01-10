document.addEventListener("DOMContentLoaded", () => {
  const flags = document.querySelectorAll(".language-selector .flag");

  // Si ya hay idioma guardado, cargarlo
  const savedLang = localStorage.getItem("lang") || "es";
  changeLanguage(savedLang);

  flags.forEach((flag) => {
    flag.addEventListener("click", () => {
      const lang = flag.dataset.lang;
      changeLanguage(lang);
      localStorage.setItem("lang", lang);
    });
  });
});

function changeLanguage(lang) {
  // aplicar estilo a la bandera activa
  document.querySelectorAll(".language-selector .flag").forEach((flag) => {
    flag.classList.toggle("active", flag.dataset.lang === lang);
  });

  // traducir todos los elementos data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // traducción especial para footer
  const footer = document.querySelector(".footer-content p");
  if (footer) footer.textContent = translations[lang].footerCreatedBy;
}

const translations = {
  es: {
    mainTitle: "MiniJuegos para Beber",
    optionYoNunca: "Yo Nunca Nunca",
    optionDrinkDear: "Señala y Bebe",
    optionTruthOrDare: "Prueba o Verdad",
    optionDrinkAndDear: "Drink and Dare",
    footerCreatedBy: "Creado por Aniol Jordán",
  },

  en: {
    mainTitle: "Drinking MiniGames",
    optionYoNunca: "Never Have I Ever",
    optionDrinkDear: "Point and Drink",
    optionTruthOrDare: "Truth or Dare",
    optionDrinkAndDear: "Drink and Dare",
    footerCreatedBy: "Created by Aniol Jordán",
  },
};
