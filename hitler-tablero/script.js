const CARTAS_FACHAS_INICIALES = 11;
const CARTAS_LIBERALES_INICIALES = 6;

let mazo = [];
let descartes = [];

let cartasJugador1 = [];
let seleccionJugador1 = [];

let liberalLaws = 0;
let fascistLaws = 0;

function guardarEstado() {
  const estado = {
    mazo,
    descartes,
    liberalLaws,
    fascistLaws,
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

function cargarEstado() {
  const estadoJSON = localStorage.getItem('hitlerGameEstado');
  if (!estadoJSON) return false;

  const estado = JSON.parse(estadoJSON);

  mazo = estado.mazo || [];
  descartes = estado.descartes || [];
  liberalLaws = estado.liberalLaws || 0;
  fascistLaws = estado.fascistLaws || 0;

  // Limpiar casillas actuales
  document.querySelectorAll('.casilla.liberal').forEach(c => c.classList.remove('liberal'));
  document.querySelectorAll('.casilla.facha').forEach(c => c.classList.remove('facha'));

  // Restaurar casillas liberales
  const casillasLiberales = document.querySelectorAll('.leyes.liberal .casilla');
  if (estado.casillasLiberales) {
    estado.casillasLiberales.forEach(i => {
      if (casillasLiberales[i]) casillasLiberales[i].classList.add('liberal');
    });
  }

  // Restaurar casillas fachas
  const casillasFachas = document.querySelectorAll('.leyes.facha .casilla');
  if (estado.casillasFachas) {
    estado.casillasFachas.forEach(i => {
      if (casillasFachas[i]) casillasFachas[i].classList.add('facha');
    });
  }

  return true;
}

function inicializarMazo() {
  mazo = [];
  for (let i = 0; i < CARTAS_FACHAS_INICIALES; i++) mazo.push('Facha');
  for (let i = 0; i < CARTAS_LIBERALES_INICIALES; i++) mazo.push('Liberal');
  barajar(mazo);
  descartes = [];
  guardarEstado();
}

function barajar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function robarCartas() {
  if (mazo.length < 3) {
    mazo = mazo.concat(descartes);
    descartes = [];
    barajar(mazo);
    guardarEstado();
  }

  cartasJugador1 = [];
  for (let i = 0; i < 3; i++) {
    cartasJugador1.push(mazo.pop());
  }
  seleccionJugador1 = [];
  mostrarModalPresidente();
}

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

function seleccionarCartaPresidente(index, elemento) {
  if (seleccionJugador1.length >= 2) return;

  seleccionJugador1.push(cartasJugador1[index]);
  
  // Marcamos la carta descartada como null para no contarla como seleccionada
  cartasJugador1[index] = null;

  elemento.style.opacity = 0.5;
  elemento.style.pointerEvents = "none";

  if (seleccionJugador1.length === 2) {
    document.getElementById("btnCerrarPresidente").disabled = false;
  }
}

function cerrarModalPresidente() {
  document.getElementById("modalPresidente").style.display = 'none';

  // Añadimos a descartes las cartas descartadas (las que NO están seleccionadas)
  descartes.push(...cartasJugador1.filter(c => c !== null));

  guardarEstado();
  mostrarModalCanciller();
}

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

function elegirCartaFinal(cartaElegida) {
  document.getElementById("modalCanciller").style.display = 'none';

  const cartaNoElegida = seleccionJugador1.find(carta => carta !== cartaElegida);
  if (cartaNoElegida) descartes.push(cartaNoElegida);

  // Actualizamos el tablero
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

  // Contadores y check victoria
  if (cartaElegida === 'Facha') {
    fascistLaws++;
    if (fascistLaws >= 6) alert('¡Victoria de los Fachas!');
  } else {
    liberalLaws++;
    if (liberalLaws >= 5) alert('¡Victoria de los Liberales!');
  }

  cartasJugador1 = [];
  seleccionJugador1 = [];

  guardarEstado();
}

function abrirModalReinicio() {
  document.getElementById('modalConfirmarReinicio').style.display = 'flex';
}

function cancelarReinicio() {
  document.getElementById('modalConfirmarReinicio').style.display = 'none';
}

function confirmarReinicio() {
  reiniciarJuego();
  cancelarReinicio();
}

function reiniciarJuego() {
  liberalLaws = 0;
  fascistLaws = 0;

  document.querySelectorAll('.casilla.liberal').forEach(c => c.classList.remove('liberal'));
  document.querySelectorAll('.casilla.facha').forEach(c => c.classList.remove('facha'));

  inicializarMazo();

  cartasJugador1 = [];
  seleccionJugador1 = [];

  document.getElementById("modalPresidente").style.display = 'none';
  document.getElementById("modalCanciller").style.display = 'none';

  localStorage.removeItem('hitlerGameEstado');
}

// Al cargar el script, intentamos cargar estado guardado. Si no hay, inicializamos mazo
if (!cargarEstado()) {
  inicializarMazo();
}
