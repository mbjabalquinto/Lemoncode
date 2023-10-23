let puntuacion: number = 0;
let cartas: Record<number, string> = {
  1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
  2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
  3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
  4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
  5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
  6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
  7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
  10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
  11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
  12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
};

const muestraPuntuacion = (): void => {
  const marcador = document.getElementById("puntuacion");
  if (
    marcador !== null &&
    marcador !== undefined &&
    marcador instanceof HTMLDivElement
  ) {
    marcador.textContent = "Puntuación:  " + puntuacion.toString();
  }
};
// GENERA UN NÚMERO DE CARTA AL AZAR EVITANDO EL 8 Y EL 9 CUANDO SE PULSA EL BOTÓN.
const dameCarta = (): void => {
  const cartaAleatoria = () => Math.floor(Math.random() * 12) + 1;
  let numero: number = 0;
  // PARA EVITAR LOS NÚMEROS 8 Y 9.
  do {
    numero = cartaAleatoria();
  } while (numero === 8 || numero === 9);

  console.log(numero);
  let resultado: boolean = muestraCarta(numero);

  if (resultado) {
    gameOver();
    nuevaPartida();
  }
};
// INSERTA EN PANTALLA LA NUEVA CARTA.
const pintaCarta = (carta: string): void => {
  const card = document.getElementById("cartas");
  if (card !== null && card !== undefined && card instanceof HTMLDivElement) {
    const img = document.createElement("img");
    img.src = carta;
    img.alt = "Carta de baraja española.";
    card.appendChild(img);
  }
};
// FUNCION PARA SUMAR LA PUNTUACIÓN CADA VEZ QUE SE PIDE UNA NUEVA CARTA.
const sumaPuntuacion = (numero: string): boolean => {
  puntuacion = puntuacion + Number(numero);
  return puntuacion > 7.5;
};

// MUESTRA EL MENSAJE AL PLANTARSE.
const mensajeFinal = (texto: string): void => {
  const mensaje = document.getElementById("gameover");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.textContent = texto;
  }
};

// FUNCION PARA DESACTIVAR LOS BOTONES.
const desactivaBoton = (id: string): void => {
  const boton = document.getElementById(id);
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.disabled = true;
  }
};

// MUESTRA NUEVO BOTÓN PARA NUEVA PARTIDA. CONTROLO QUE EL BOTÓN NO HAYA SIDO INSERTADO YA PARA NO REPETIRLO.
const nuevaPartida = () => {
  const nueva = document.getElementById("nuevoBoton");
  const botonExistente = document.getElementById("nuevaPartida");
  if (
    nueva !== null &&
    nueva !== undefined &&
    nueva instanceof HTMLDivElement &&
    botonExistente === null
  ) {
    const button = document.createElement("button");
    button.textContent = "Nueva partida"; // Asigna el texto al botón
    button.className = "button-gold";
    button.id = "nuevaPartida";
    button.onclick = () => location.reload(); // Asigna el evento click antes de agregar el botón al DOM
    nueva.appendChild(button); // Agrega el botón al div
  }
};

// MOSTRAR LOS MENSAJES Y DESACTIVAR LOS BOTONES AL PLANTARSE. DESPUÉS LLAMA A LA FUNCIÓN.. ¿QUE PASARÍA SI?
const mePlanto = () => {
  if (puntuacion <= 4) {
    mensajeFinal("Has sido muy conservador.");
  } else if (puntuacion > 4 && puntuacion < 6) {
    mensajeFinal("Te ha entrado el canguelo eh?");
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    mensajeFinal("Casi casi..");
  } else if (puntuacion === 7.5) {
    mensajeFinal("Lo has clavado! ¡Enhorabuena!");
  }
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  nuevaPartida();
  whatIf();
};

const whatIf = () => {
  const seguir = document.getElementById("nuevoBoton2");
  if (
    seguir !== null &&
    seguir !== undefined &&
    seguir instanceof HTMLDivElement
  ) {
    const button = document.createElement("button");
    button.textContent = "y si..?"; // Asigna el texto al botón
    button.className = "button-silver";
    button.id = "whatif";
    button.onclick = () => dameCarta(); // Asigna el evento click antes de agregar el botón al DOM
    seguir.appendChild(button); // Agrega el botón al div
  }
};

// MUESTRA MENSAJE Y DESACTIVA EL BOTÓN.
const gameOver = () => {
  const mensaje = document.getElementById("gameover");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.textContent = "Lo siento pero te has pasado!! Has perdido.";
  }
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
};

// SEGÚN EL NÚMERO RECIBIDO LLAMA A LA FUNCIÓN QUE PINTA LA CARTA CORRESPONDIENTE.
const muestraCarta = (carta: number) => {
  let puntuacion: boolean = false;
  switch (carta) {
    case 1:
      pintaCarta(cartas[1]);
      puntuacion = sumaPuntuacion("1");
      muestraPuntuacion();
      break;
    case 2:
      pintaCarta(cartas[2]);
      puntuacion = sumaPuntuacion("2");
      muestraPuntuacion();
      break;
    case 3:
      pintaCarta(cartas[3]);
      puntuacion = sumaPuntuacion("3");
      muestraPuntuacion();
      break;
    case 4:
      pintaCarta(cartas[4]);
      puntuacion = sumaPuntuacion("4");
      muestraPuntuacion();
      break;
    case 5:
      pintaCarta(cartas[5]);
      puntuacion = sumaPuntuacion("5");
      muestraPuntuacion();
      break;
    case 6:
      pintaCarta(cartas[6]);
      puntuacion = sumaPuntuacion("6");
      muestraPuntuacion();
      break;
    case 7:
      pintaCarta(cartas[7]);
      puntuacion = sumaPuntuacion("7");
      muestraPuntuacion();
      break;
    case 10:
      pintaCarta(cartas[10]);
      puntuacion = sumaPuntuacion("0.5");
      muestraPuntuacion();
      break;
    case 11:
      pintaCarta(cartas[11]);
      puntuacion = sumaPuntuacion("0.5");
      muestraPuntuacion();
      break;
    case 12:
      pintaCarta(cartas[12]);
      puntuacion = sumaPuntuacion("0.5");
      muestraPuntuacion();
      break;
  }
  return puntuacion;
};

// MANEJADOR DE EVENTOS.
const manejaEventos = (): void => {
  const botonCarta = document.getElementById("dameCarta");
  if (
    botonCarta !== null &&
    botonCarta !== undefined &&
    botonCarta instanceof HTMLButtonElement
  ) {
    botonCarta.addEventListener("click", dameCarta);
  }
  const botonPlanto = document.getElementById("meplanto");
  if (
    botonPlanto !== null &&
    botonPlanto !== undefined &&
    botonPlanto instanceof HTMLButtonElement
  ) {
    botonPlanto.addEventListener("click", mePlanto);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  manejaEventos();
});
