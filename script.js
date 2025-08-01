let maxPlayers = 10;
let assignedRoles = [];

function addPlayer() {
  const playersDiv = document.getElementById("players");
  const count = playersDiv.getElementsByTagName("input").length;

  if (count >= maxPlayers) {
    alert("Máximo 10 jugadores");
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Player " + (count + 1);
  playersDiv.appendChild(input);
}

function startGame() {
  const inputs = document.querySelectorAll("#players input");
  const players = Array.from(inputs)
    .map(input => input.value.trim() || input.placeholder)
    .slice(0, maxPlayers);

  const numPlayers = players.length;

  if (numPlayers < 5) {
    alert("Se necesitan al menos 5 jugadores.");
    return;
  }

  const roles = generateSecretHitlerRoles(numPlayers);
  const shuffledRoles = shuffleArray(roles);

  assignedRoles = players.map((name, i) => ({
    name,
    role: shuffledRoles[i]
  }));

  renderPlayers();
}

function generateSecretHitlerRoles(numPlayers) {
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

  for (let i = 0; i < fachas; i++) roles.push("Fascista");
  roles.push("Hitler");
  for (let i = 0; i < liberales; i++) roles.push("Liberal");

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
  document.getElementById("modalPlayerName").textContent = name;
  document.getElementById("modalPlayerRole").textContent = `Tu rol es: ${role}`;
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
