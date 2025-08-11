// ================== PARTE 1 - MAZO Y LEYES ==================
const CARTAS_FACHAS_INICIALES = 11;
const CARTAS_LIBERALES_INICIALES = 6;

let mazo = [];
let descartes = [];

let rolesVistos = JSON.parse(localStorage.getItem('rolesVistos') || '[]'); // Guarda jugadores que ya vieron su rol

let cartasJugador1 = [];
let seleccionJugador1 = [];

let liberalLaws = 0;
let fascistLaws = 0;

// Variables para control del juego y jugadores
let maxPlayers = 10;
let assignedRoles = [];
let gameStarted = false;
let siguientePresidente = null; // nombre del próximo presidente si se elige en tablero

// Guarda estado en localStorage (mazo, leyes, casillas y siguiente presidente)
function guardarEstadoMazo() {
  const estado = {
    mazo,
    descartes,
    liberalLaws,
    fascistLaws,
    siguientePresidente,
    casillasLiberales: [],
    casillasFachas: []
  };

  document.querySelectorAll('.leyes.liberal .casilla.liberal').forEach((c, i) => {
    estado.casillasLiberales.push(i);
  });
  document.querySelectorAll('.leyes.facha .casilla.facha').forEach((c, i) => {
    estado.casillasFachas.push(i);
  });

  localStorage.setItem('hitlerGameEstado', JSON.stringify(estado));
}

// Carga estado del mazo y tablero (mazo, descartes, leyes, casillas y siguiente presidente)
function cargarEstadoMazo() {
  const estadoJSON = localStorage.getItem('hitlerGameEstado');
  if (!estadoJSON) return false;

  const estado = JSON.parse(estadoJSON);

  mazo = estado.mazo || [];
  descartes = estado.descartes || [];
  liberalLaws = estado.liberalLaws || 0;
  fascistLaws = estado.fascistLaws || 0;
  siguientePresidente = estado.siguientePresidente || null;

  document.querySelectorAll('.casilla.liberal').forEach(c => c.classList.remove('liberal'));
  document.querySelectorAll('.casilla.facha').forEach(c => c.classList.remove('facha'));

  const casillasLiberales = document.querySelectorAll('.leyes.liberal .casilla');
  if (estado.casillasLiberales) {
    estado.casillasLiberales.forEach(i => {
      if (casillasLiberales[i]) casillasLiberales[i].classList.add('liberal');
    });
  }

  const casillasFachas = document.querySelectorAll('.leyes.facha .casilla');
  if (estado.casillasFachas) {
    estado.casillasFachas.forEach(i => {
      if (casillasFachas[i]) casillasFachas[i].classList.add('facha');
    });
  }

  return true;
}

// Inicializa mazo y descarta vacío
function inicializarMazo() {
  mazo = [];
  for (let i = 0; i < CARTAS_FACHAS_INICIALES; i++) mazo.push('Facha');
  for (let i = 0; i < CARTAS_LIBERALES_INICIALES; i++) mazo.push('Liberal');
  barajar(mazo);
  descartes = [];
  siguientePresidente = null;
  guardarEstadoMazo();
}

// Baraja el array recibido
function barajar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Roba 3 cartas, refresca mazo si quedan menos de 3
function robarCartas() {
  if (mazo.length < 3) {
    mazo = mazo.concat(descartes);
    descartes = [];
    barajar(mazo);
    guardarEstadoMazo();
  }

  cartasJugador1 = [];
  for (let i = 0; i < 3; i++) {
    cartasJugador1.push(mazo.pop());
  }
  seleccionJugador1 = [];
  mostrarModalPresidente();
}

// Modal para que el presidente elija 2 cartas
function mostrarModalPresidente() {
  const modal = document.getElementById("modalPresidente");
  const contenedor = document.getElementById("cartasPresidente");
  const botonCerrar = document.getElementById("btnCerrarPresidente");

  contenedor.innerHTML = '';
  botonCerrar.disabled = true;

  cartasJugador1.forEach((carta, index) => {
    const el = document.createElement('div');
    el.className = `carta ${carta.toLowerCase()}`;
    el.innerText = carta;
    el.onclick = () => seleccionarCartaPresidente(index, el);
    contenedor.appendChild(el);
  });

  modal.style.display = 'flex';
}

// Selecciona carta del presidente para pasar al canciller
function seleccionarCartaPresidente(index, elemento) {
  if (seleccionJugador1.length >= 2) return;

  seleccionJugador1.push(cartasJugador1[index]);
  cartasJugador1[index] = null;

  elemento.style.opacity = 0.5;
  elemento.style.pointerEvents = "none";

  if (seleccionJugador1.length === 2) {
    document.getElementById("btnCerrarPresidente").disabled = false;
  }
}

// Presidente cierra modal y pasan cartas descartadas y se muestra modal canciller
function cerrarModalPresidente() {
  document.getElementById("modalPresidente").style.display = 'none';
  descartes.push(...cartasJugador1.filter(c => c !== null));

  guardarEstadoMazo();
  mostrarModalCanciller();
}

// Modal canciller elige carta final
function mostrarModalCanciller() {
  const modal = document.getElementById("modalCanciller");
  const contenedor = document.getElementById("cartasCanciller");
  contenedor.innerHTML = '';

  seleccionJugador1.forEach((carta) => {
    const el = document.createElement('div');
    el.className = `carta ${carta.toLowerCase()}`;
    el.innerText = carta;
    el.onclick = () => elegirCartaFinal(carta);
    contenedor.appendChild(el);
  });

  modal.style.display = 'flex';
}

// Al elegir carta final, se aplica y se ejecutan acciones del tablero fascista si es ley facha
async function elegirCartaFinal(cartaElegida) {
  document.getElementById("modalCanciller").style.display = 'none';

  const cartaNoElegida = seleccionJugador1.find(carta => carta !== cartaElegida);
  if (cartaNoElegida) descartes.push(cartaNoElegida);

  const contenedor = cartaElegida === 'Facha' 
    ? document.querySelector('.leyes.facha .casillas')
    : document.querySelector('.leyes.liberal .casillas');

  const casillas = contenedor.querySelectorAll('.casilla');
  for (const casilla of casillas) {
    if (!casilla.classList.contains('liberal') && !casilla.classList.contains('facha')) {
      casilla.classList.add(cartaElegida.toLowerCase());
      break;
    }
  }

  if (cartaElegida === 'Facha') {
    fascistLaws++;
    if (fascistLaws >= 6) {
      await customAlert('¡Victoria de los Fachas!');
    } else {
      accionTableroFascista(fascistLaws);
    }
  } else {
    liberalLaws++;
    if (liberalLaws >= 5) await customAlert('¡Victoria de los Liberales!');
  }

  cartasJugador1 = [];
  seleccionJugador1 = [];

  guardarEstadoMazo();
}

// ================== ACCIONES TABLERO FASCISTA ==================

// Devuelve tipo de tablero fascista según número de jugadores
function getTableroFascistaTipo(numPlayers) {
  if (numPlayers === 5 || numPlayers === 6) return 'A';   // Acciones desde la 3ª ley
  if (numPlayers === 7 || numPlayers === 8) return 'B';   // Acciones desde la 2ª ley
  if (numPlayers === 9 || numPlayers === 10) return 'C';  // Acciones desde la 1ª ley
  return null;
}

// Ejecuta la acción según tablero y ley fascista actual
function accionTableroFascista(leyActual) {
  const numPlayers = assignedRoles.length;
  const tablero = getTableroFascistaTipo(numPlayers);
  if (!tablero) return;

  const accionesPorTablero = {
    A: { // 5-6 jugadores
      3: 'verCartasMazo',
      4: 'matarJugador',
      5: 'matarJugador'
    },
    B: { // 7-8 jugadores
      2: 'verCartaJugador',
      3: 'escogerSiguientePresidente',
      4: 'matarJugador',
      5: 'matarJugador'
    },
    C: { // 9-10 jugadores
      1: 'verCartaJugador',
      2: 'verCartaJugador',
      3: 'escogerSiguientePresidente',
      4: 'matarJugador',
      5: 'matarJugador'
    }
  };

  const accion = accionesPorTablero[tablero][leyActual];
  if (!accion) return;

  switch (accion) {
    case 'verCartasMazo':
      mostrarCartasMazoTop(3);
      break;
    case 'matarJugador':
      solicitarMatarJugador();
      break;
    case 'verCartaJugador':
      solicitarVerCartaJugador();
      break;
    case 'escogerSiguientePresidente':
      solicitarEscogerSiguientePresidente();
      break;
  }
}

// Muestra las cartas superiores del mazo al presidente
async function mostrarCartasMazoTop(cantidad) {
  const cartasTop = mazo.slice(-cantidad).reverse();
  await customAlert('Las cartas superiores del mazo son: ' + cartasTop.join(', '));
}

// Solicita elegir un jugador para eliminar
async function solicitarMatarJugador() {
  // if (assignedRoles.length <= 5) {
  //   await customAlert('No se puede eliminar jugadores si quedan menos de 5.');
  //   return;
  // }

  // Poner opciones en el select
  const select = document.getElementById('selectMatarJugador');
  select.innerHTML = ''; // limpiar opciones
  assignedRoles.forEach(p => {
    const option = document.createElement('option');
    option.value = p.name;
    option.textContent = p.name;
    select.appendChild(option);
  });

  // Mostrar modal
  document.getElementById('modalMatarJugador').style.display = 'flex';
}

// Confirmar matar jugador
document.getElementById('btnConfirmarMatar').onclick = async () => {
  const select = document.getElementById('selectMatarJugador');
  const nombre = select.value;

  if (!nombre) return;

  const index = assignedRoles.findIndex(p => p.name === nombre);
  if (index === -1) {
    await customAlert('Jugador no encontrado.');
    return;
  }

  const jugador = assignedRoles[index]; // Guardamos el jugador antes de eliminarlo
  assignedRoles.splice(index, 1);

  await customAlert(`Jugador "${jugador.name}" (${jugador.role}) eliminado.`);
  renderPlayers();
  guardarEstadoJugadores();

  cerrarModal('modalMatarJugador');
};

// Solicita elegir un jugador para revelar su rol
function solicitarVerCartaJugador() {
  const select = document.getElementById('selectVerRol');
  select.innerHTML = '';
  assignedRoles.forEach(p => {
    const option = document.createElement('option');
    option.value = p.name;
    option.textContent = p.name;
    select.appendChild(option);
  });

  document.getElementById('modalVerRol').style.display = 'flex';
}

document.getElementById('btnConfirmarVerRol').onclick = async () => {
  const select = document.getElementById('selectVerRol');
  const nombre = select.value;

  if (!nombre) return;

  const jugador = assignedRoles.find(p => p.name === nombre);
  if (!jugador) {
    await customAlert('Jugador no encontrado.');
    return;
  }

  await customAlert(`El rol de ${jugador.name} es: ${jugador.role}`);
  cerrarModal('modalVerRol');
};

// Solicita elegir el siguiente presidente
function solicitarEscogerSiguientePresidente() {
  const select = document.getElementById('selectSiguientePresidente');
  select.innerHTML = '';
  assignedRoles.forEach(p => {
    const option = document.createElement('option');
    option.value = p.name;
    option.textContent = p.name;
    select.appendChild(option);
  });

  document.getElementById('modalSiguientePresidente').style.display = 'flex';
}

document.getElementById('btnConfirmarPresidente').onclick = async () => {
  const select = document.getElementById('selectSiguientePresidente');
  const nombre = select.value;

  if (!nombre) return;

  const jugador = assignedRoles.find(p => p.name === nombre);
  if (!jugador) {
    await customAlert('Jugador no encontrado.');
    return;
  }

  siguientePresidente = jugador.name;
  await customAlert(`Has escogido a ${jugador.name} como próximo presidente.`);
  guardarEstadoMazo();
  cerrarModal('modalSiguientePresidente');
};
function cerrarModal(idModal) {
  document.getElementById(idModal).style.display = 'none';
}
function guardarEstadoJugadores() {
  localStorage.setItem('assignedRoles', JSON.stringify(assignedRoles));
  // también guarda el arreglo de nombres para inputs si quieres
  localStorage.setItem('savedPlayers', JSON.stringify(assignedRoles.map(p => p.name)));
}


// ================== PARTE 2 - JUGADORES Y ROLES ==================

async function addPlayer() {
  const playersDiv = document.getElementById("players");
  const count = playersDiv.getElementsByTagName("input").length;

  if (gameStarted) return; // No añadir si el juego empezó

  if (count >= maxPlayers) {
    await customAlert('Máximo número de jugadores alcanzado.');
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = 'Player ' + (count + 1);
  playersDiv.appendChild(input);
}

function removePlayer() {
  if (gameStarted) return; // No eliminar si el juego empezó

  const playersDiv = document.getElementById("players");
  const inputs = playersDiv.getElementsByTagName("input");
  if (inputs.length > 1) playersDiv.removeChild(inputs[inputs.length - 1]);
}

function handleStartOrReset() {
  if (!gameStarted) {
    startGame();
  } else {
    if (confirm('¿Seguro que quieres reiniciar el juego?')) {
      resetGame();
    }
  }
}

async function startGame() {
  if (!(await customConfirm('¿Seguro que quieres empezar la partida? Los roles se asignarán y no podrás cambiar los nombres.'))) return;

  const inputs = document.querySelectorAll("#players input");
  const players = Array.from(inputs)
    .map(input => input.value.trim() || input.placeholder)
    .slice(0, maxPlayers);

  if (players.length < 5) {
    await customAlert('Se necesitan al menos 5 jugadores para empezar.');
    return;
  }

  const roles = generateSecretHitlerRoles(players.length);
  const shuffledRoles = shuffleArray(roles);
  assignedRoles = players.map((name, i) => ({ name, role: shuffledRoles[i] }));
  renderPlayers();
  localStorage.setItem('assignedRoles', JSON.stringify(assignedRoles));
  localStorage.setItem('savedPlayers', JSON.stringify(players));

  // Bloquear inputs
  inputs.forEach(input => input.disabled = true);

  // Cambiar estado y texto botón
  gameStarted = true;
  siguientePresidente = null; // reinicia cada partida el siguiente presidente
  updateStartResetButton();
}

function resetGame() {
  // Limpiar datos
  assignedRoles = [];
  localStorage.removeItem('assignedRoles');
  localStorage.removeItem('savedPlayers');
  localStorage.removeItem('rolesVistos'); // <-- limpiar lista
  rolesVistos = []; // <-- vaciar array

  // Limpiar UI
  const playersDiv = document.getElementById("players");
  playersDiv.innerHTML = '';
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = 'Player 1';
  playersDiv.appendChild(input);

  const rolesResult = document.getElementById("rolesResult");
  rolesResult.innerHTML = '';

  // Reiniciar mazo y leyes
  reiniciarJuego();

  // Cambiar estado y texto botón
  gameStarted = false;
  siguientePresidente = null;
  updateStartResetButton();
}

function updateStartResetButton() {
  const btn = document.getElementById('startResetBtn');
  btn.textContent = gameStarted ? 'Reiniciar' : 'Empezar';
}

function generateSecretHitlerRoles(numPlayers) {
  let fachas = 0, hitlers = 1, liberales = 0;
  if (numPlayers === 5 || numPlayers === 6) fachas = 1;
  else if (numPlayers === 7 || numPlayers === 8) fachas = 2;
  else if (numPlayers === 9 || numPlayers === 10) fachas = 3;
  liberales = numPlayers - fachas - hitlers;

  const roles = [];
  for (let i = 0; i < fachas; i++) roles.push('Fascista');
  roles.push('Hitler');
  for (let i = 0; i < liberales; i++) roles.push('Liberal');
  return roles;
}

function shuffleArray(array) {
  return array.map(value => ({ value, sort: Math.random() }))
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
  // Si ya vio su rol, no dejar verlo otra vez
  if (rolesVistos.includes(name)) {
    customAlert(`${name} ya ha visto su rol y no puede volver a verlo.`);
    return;
  }

  document.getElementById("modalPlayerName").textContent = name;
  document.getElementById("modalPlayerRole").textContent = 'Tu rol es: ' + role;
  document.getElementById("roleModal").style.display = "flex";

  // Guardar que ya lo vio
  rolesVistos.push(name);
  localStorage.setItem('rolesVistos', JSON.stringify(rolesVistos));
}

function closeModal() {
  document.getElementById("roleModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("roleModal");
  if (event.target === modal) modal.style.display = "none";
};

// ================== REINICIAR JUEGO ==================
function reiniciarJuego() {
  liberalLaws = 0;
  fascistLaws = 0;
  siguientePresidente = null;
  document.querySelectorAll('.casilla.liberal').forEach(c => c.classList.remove('liberal'));
  document.querySelectorAll('.casilla.facha').forEach(c => c.classList.remove('facha'));
  inicializarMazo();
  cartasJugador1 = [];
  seleccionJugador1 = [];
  document.getElementById("modalPresidente").style.display = 'none';
  document.getElementById("modalCanciller").style.display = 'none';
  localStorage.removeItem('hitlerGameEstado');

  // limpiar roles vistos
  localStorage.removeItem('rolesVistos');
  rolesVistos = [];
}

// ================== ONLOAD UNIFICADO ==================
window.onload = () => {
  // Cargar jugadores guardados
  const savedPlayers = JSON.parse(localStorage.getItem('savedPlayers') || '[]');
  const playersDiv = document.getElementById("players");
  playersDiv.innerHTML = '';
  if (savedPlayers.length > 0) {
    savedPlayers.forEach((name, i) => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = name || "";
      input.placeholder = 'Player ' + (i + 1);
      input.disabled = true; // bloquear si están guardados porque la partida empezó
      playersDiv.appendChild(input);
    });
    gameStarted = true;
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = 'Player 1';
    playersDiv.appendChild(input);
  }

  // Cargar roles guardados
  const savedRoles = JSON.parse(localStorage.getItem('assignedRoles') || '[]');
  if (savedRoles.length > 0) {
    assignedRoles = savedRoles;
    renderPlayers();
  }

  // Cargar estado del mazo (incluye siguiente presidente)
  if (!cargarEstadoMazo()) {
    inicializarMazo();
  }

  updateStartResetButton();
};
function customAlert(message) {
  return new Promise(resolve => {
    const modal = document.getElementById("customModal");
    const text = document.getElementById("customModalText");
    const buttons = document.getElementById("customModalButtons");

    text.textContent = message;
    buttons.innerHTML = `<button id="okBtn">OK</button>`;

    document.getElementById("okBtn").onclick = () => {
      modal.style.display = "none";
      resolve();
    };

    modal.style.display = "flex";
  });
}

function customConfirm(message) {
  return new Promise(resolve => {
    const modal = document.getElementById("customModal");
    const text = document.getElementById("customModalText");
    const buttons = document.getElementById("customModalButtons");

    text.textContent = message;
    buttons.innerHTML = `
      <button id="yesBtn">Sí</button>
      <button id="noBtn">No</button>
    `;

    document.getElementById("yesBtn").onclick = () => {
      modal.style.display = "none";
      resolve(true);
    };
    document.getElementById("noBtn").onclick = () => {
      modal.style.display = "none";
      resolve(false);
    };

    modal.style.display = "flex";
  });
}
// Abrir modal de Normas
document.getElementById("btnNormas").addEventListener("click", () => {
    document.getElementById("modalNormas").style.display = "flex";
});

// Función genérica para cerrar modales
function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}
