let players = [];
let turnCounts = [];
let currentPlayer = null;
let nextPlayer = null;

const verdades = [
  "¿Con quién de aquí tendrías una cita de una noche?",
  "¿Cuál es tu fantasía más loca (y aún no cumplida)?",
  "¿Alguna vez te has liado con alguien en este grupo?",
  "¿Cuál ha sido el lugar más raro donde has tenido sexo?",
  "¿Quién te parece más atractivo/a de los presentes?",
  "¿Te arrepientes de haberte acostado con alguien? ¿Con quién?",
  "¿Has enviado nudes? ¿A quién?",
  "¿Alguna vez te han pillado haciendo algo sexual?",
  "¿Cuál ha sido tu mayor borrachera épica?",
  "¿Te liarías con alguien de aquí por dinero? ¿Quién sería el primero?",
  "¿Cuál ha sido tu mayor metida de pata estando borracho?",
  "¿Qué es lo más loco que has hecho en una fiesta?",
  "¿Quién es la persona más guapa que has besado?",
  "¿Has tenido sexo en público? ¿Dónde?",
  "¿Con quién de aquí compartirías cama sin dudar?",
  "¿Cuál es la mentira más grande que has dicho para ligar?",
  "¿Has tenido sexo con alguien que no recuerdas su nombre?",
  "¿Cuál es el mayor secreto que nunca le has contado a nadie?",
  "¿Qué es lo más sucio que has buscado en internet?",
  "¿Has tenido un rollo con alguien con pareja?",
  "¿Cuál es tu mayor fetiche?",
  "¿Cuál ha sido el polvo más decepcionante de tu vida?",
  "¿Qué prefieres: sexo rápido y salvaje o lento e intenso?",
  "¿Cuál ha sido el sitio más incómodo donde lo has hecho?",
  "¿Con quién de aquí harías un trío?",
  "¿Has tenido un sueño erótico con alguien de este grupo?",
  "¿Qué es lo más raro que te han pedido en la cama?",
  "¿Has usado juguetes sexuales con alguien?",
  "¿Has hecho sexting alguna vez?",
  "¿Cuál es el mayor secreto que te ha contado una pareja?",
  "¿Con qué famoso/a te gustaría acostarte?",
  "¿Cuál es tu mayor arrepentimiento amoroso?",
  "¿Cuál es tu recuerdo más borroso de una fiesta?",
  "¿Te has enamorado de alguien imposible?",
  "¿Has fingido un orgasmo?",
  "¿Cuál ha sido el mayor drama amoroso en el que te has metido?",
  "¿Con quién tuviste tu mejor beso?",
  "¿Qué es lo más loco que has hecho por ligar?",
  "¿Alguna vez has enviado fotos hot a alguien equivocado?",
  "¿Quién de aquí crees que lo hace mejor en la cama?",
];

const pruebas = [
  "Bebe un chupito del ombligo de alguien",
  "Lame el cuello de la persona a tu derecha",
  "Dale un beso en la mejilla a la persona que el grupo elija",
  "Haz un striptease (mínimo camiseta) hasta que el grupo diga basta",
  "Intercambia una prenda de ropa con la persona a tu izquierda",
  "Haz un brindis con otro jugador y bebe hasta que tú pares, él debe seguirte",
  "Susurra algo sucio al oído de la persona que elijas",
  "Deja que el grupo elija a quién tienes que darle un abrazo muy apretado",
  "Deja que el grupo elija una palabra prohibida: si la dices hasta tu próximo turno, bebes",
  "Baila perreo intenso con alguien durante 20 segundos",
  "Deja que alguien te dé un beso en el cuello",
  "Pasa tu móvil y deja que otro jugador lea un chat aleatorio",
  "Canta una canción sexy en el oído de alguien",
  "Deja que el grupo elija a quién tienes que acariciar la pierna durante 15 segundos",
  "Bebe de la copa de otra persona sin usar tus manos",
  "Haz que otro jugador te dé de beber directamente en la boca",
  "Elige a alguien y dale un piquito en la boca",
  "Deja que alguien te quite una prenda de ropa elegida por el grupo",
  "Haz que el grupo elija a alguien para que se siente en tus piernas 30 segundos",
  "Deja que el grupo elija a quién debes darle un masaje de 15 segundos",
  "Deja que otro jugador te dé un azote",
  "Bebe un trago usando solo la boca de alguien más (sin manos)",
  "Haz de DJ humano: imita una canción sensual durante 20 segundos",
  "Elige a alguien y intercambien sus bebidas",
  "Haz una pose sexy para una foto que guarde el grupo",
  "Deja que alguien te pinte algo en el brazo con un rotulador",
  "Elige a alguien y baila lento agarrándolo/a fuerte",
  "Haz que alguien te haga cosquillas 15 segundos sin parar",
  "Lame la oreja de la persona a tu izquierda",
  "Deja que el grupo te haga una pregunta extra hot y respóndela o bebe",
  "Muerde suavemente el hombro de alguien",
  "Bebe directamente de la botella como si fuera tu última copa",
  "Haz 5 flexiones con alguien sentado encima (o bebe si no puedes)",
  "Deja que el grupo decida qué prenda de ropa tienes que quitarte",
  "Róbale un sorbo de copa a alguien sin que se dé cuenta",
  "Haz una imitación sexy de un famoso durante 15 segundos",
  "Deja que otro jugador elija con quién tienes que brindar y beber a la vez",
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
