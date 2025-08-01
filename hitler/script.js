let maxPlayers = 10;
let assignedRoles = [];
function getCurrentLanguage() {
  return document.querySelector(".language-selector .flag.active")?.getAttribute("data-lang") || 'es';
}


function addPlayer() {
  const playersDiv = document.getElementById("players");
  const count = playersDiv.getElementsByTagName("input").length;

  const lang = getCurrentLanguage();

  if (count >= maxPlayers) {
    alert(translations[lang].maxPlayersAlert);
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = translations[lang].playerPlaceholder + (count + 1);
  playersDiv.appendChild(input);
}


function startGame() {
  const lang = getCurrentLanguage();

  const inputs = document.querySelectorAll("#players input");
  const players = Array.from(inputs)
    .map(input => input.value.trim() || input.placeholder)
    .slice(0, maxPlayers);

  const numPlayers = players.length;

  if (numPlayers < 5) {
    alert(translations[lang].minPlayersAlert);
    return;
  }

  const roles = generateSecretHitlerRoles(numPlayers, lang);
  const shuffledRoles = shuffleArray(roles);

  assignedRoles = players.map((name, i) => ({
    name,
    role: shuffledRoles[i]
  }));

  renderPlayers();
}


function generateSecretHitlerRoles(numPlayers, lang) {
  let fachas = 0;
  let hitlers = 1;
  let liberales = 0;

  if (numPlayers === 5 || numPlayers === 6) {
    fachas = 1;
  } else if (numPlayers === 7 || numPlayers === 8) {
    fachas = 2;
  } else if (numPlayers === 9 || numPlayers === 10) {
    fachas = 3;
  }

  liberales = numPlayers - fachas - hitlers;

  const roles = [];

  for (let i = 0; i < fachas; i++) roles.push(translations[lang].roles.fascista);
  roles.push(translations[lang].roles.hitler);
  for (let i = 0; i < liberales; i++) roles.push(translations[lang].roles.liberal);

  return roles;
}


function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function renderPlayers() {
  const container = document.getElementById("rolesResult");
  container.innerHTML = "";

  assignedRoles.forEach((playerData) => {
    const btn = document.createElement("div");
    btn.className = "player-button";
    btn.textContent = playerData.name;
    btn.onclick = () => showModal(playerData.name, playerData.role);
    container.appendChild(btn);
  });
}

function showModal(name, role) {
  const lang = getCurrentLanguage();

  document.getElementById("modalPlayerName").textContent = name;
  document.getElementById("modalPlayerRole").textContent = translations[lang].roleText + role;
  document.getElementById("roleModal").style.display = "flex";
}


function closeModal() {
  document.getElementById("roleModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("roleModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
