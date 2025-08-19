let players = [];
let turnCounts = [];
let currentPlayer = null;
let nextPlayer = null;

const verdades = [
  "¿Cuál ha sido tu mayor vergüenza?",
  "¿Has mentido a alguno de los jugadores?",
  "¿Quién te gusta en secreto?",
  "¿Cuál es tu mayor miedo?",
  "¿Cuál ha sido la peor cita de tu vida?",
];

const pruebas = [
  "Imita a un animal durante 10 segundos 🐒",
  "Baila sin música durante 15 segundos 💃",
  "Di el abecedario al revés 🔤",
  "Habla con acento raro hasta tu próximo turno 🎭",
  "Deja que otro jugador te haga una pregunta extra 📢",
];

// Guardar en localStorage
function saveGame() {
  localStorage.setItem(
    "truthOrDareGame",
    JSON.stringify({
      players,
      turnCounts,
      currentPlayer,
      nextPlayer,
    })
  );
}

// Cargar de localStorage
function loadGame() {
  const data = localStorage.getItem("truthOrDareGame");
  if (data) {
    const saved = JSON.parse(data);
    players = saved.players || [];
    turnCounts = saved.turnCounts || [];
    currentPlayer = saved.currentPlayer;
    nextPlayer = saved.nextPlayer;

    if (players.length > 0 && turnCounts.length > 0) {
      document.getElementById("setup").classList.add("hidden");
      document.getElementById("game").classList.remove("hidden");
      updateScreen();
      return true;
    }
  }
  return false;
}

// Mostrar lista de jugadores con botón eliminar
function renderPlayerList() {
  const listDiv = document.getElementById("playerList");
  listDiv.innerHTML = "";
  players.forEach((p, i) => {
    const item = document.createElement("div");
    item.className = "playerItem";
    item.innerHTML = `<span>${p}</span>
                          <button class="btn danger" onclick="removePlayer(${i})">❌</button>`;
    listDiv.appendChild(item);
  });
}

// Añadir jugador
function addPlayer() {
  const input = document.getElementById("playerName");
  const name = input.value.trim();
  if (!name) return;
  if (players.includes(name)) {
    alert("Ese jugador ya está en la lista");
    return;
  }
  players.push(name);
  input.value = "";
  renderPlayerList();
}

// Eliminar jugador de la lista inicial
function removePlayer(index) {
  players.splice(index, 1);
  renderPlayerList();
}

// Iniciar el juego
function startGame() {
  if (players.length < 2) {
    alert("Introduce al menos 2 jugadores!");
    return;
  }
  turnCounts = new Array(players.length).fill(0);
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  nextTurn();
}

function choose(option) {
  document.getElementById("choiceText").innerText =
    currentPlayer + " eligió: " + option + " 🎲";

  let challenge;
  if (option === "Verdad") {
    challenge = verdades[Math.floor(Math.random() * verdades.length)];
  } else {
    challenge = pruebas[Math.floor(Math.random() * pruebas.length)];
  }

  document.getElementById("challengeText").innerText = challenge;

  document.getElementById("game").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  saveGame();
}

function nextTurn() {
  if (players.length < 2) {
    alert("Quedan menos de 2 jugadores. Reinicia la partida.");
    return;
  }

  const minTurns = Math.min(...turnCounts);
  let candidates = players.filter((_, i) => turnCounts[i] === minTurns);
  currentPlayer = candidates[Math.floor(Math.random() * candidates.length)];

  const idx = players.indexOf(currentPlayer);
  turnCounts[idx]++;

  let possibleNext = players.filter((p) => p !== currentPlayer);
  nextPlayer = possibleNext[Math.floor(Math.random() * possibleNext.length)];

  updateScreen();
  saveGame();
}

function updateScreen() {
  document.getElementById("turnInfo").innerText = "Turno de: " + currentPlayer;
  document.getElementById("nextPlayer").innerText = nextPlayer;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}

function resetGame() {
  if (confirm("¿Seguro que quieres reiniciar la partida?")) {
    localStorage.removeItem("truthOrDareGame");
    players = [];
    turnCounts = [];
    currentPlayer = null;
    nextPlayer = null;
    document.getElementById("setup").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("playerList").innerHTML = "";
    document.getElementById("playerName").value = "";
  }
}

window.onload = () => {
  if (!loadGame()) {
    // nada cargado → empezamos vacíos
  }
};
