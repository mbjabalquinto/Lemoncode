let puntuacion: number = 0;
// OBJETO CON LAS URL DE LAS CARTAS.
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

// GENERA UN NÚMERO DE CARTA AL AZAR EVITANDO EL 8 Y EL 9 CUANDO SE PULSA EL BOTÓN.

const generaNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const valorCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio <= 7 ? numeroAleatorio : numeroAleatorio + 2;
};

// ES LLAMADA AL PULSAR EL BOTÓN DAME CARTA. OBTIENE EL VALOR ALEATORIO, OBTIENE LA URL DE LA CARTA Y LLAMA A LAS FUNCIONES.
const dameCarta = (): void => {
  const numeroAleatorio: number = generaNumeroAleatorio();
  const valor: number = valorCarta(numeroAleatorio);
  const carta: string = cartas[valor];
  pintaCarta(carta);
  sumaPuntuacion(valor);
  muestraPuntuacion();
  // CONTROLA SI SE HA PASADO O SI LO HA CLAVADO. EN ESTOS DOS CASOS NO ESPERA QUE SE PULSE EL BOTÓN.
  if (puntuacion > 7.5) {
    gameOver();
  } else if (puntuacion === 7.5) {
    mePlanto();
    desactivaBoton("continuar");
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

// ELIMINA TODOS LOS HIJOS DEL ELEMENTO DIV. LIMPIA TODAS LAS CARTAS ANTERIORES PARA COMENZAR DE NUEVO.
const limpiaCartas = (): void => {
  const card = document.getElementById("cartas");
  if (card !== null && card !== undefined && card instanceof HTMLDivElement) {
    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }
  }
};

// FUNCION PARA SUMAR LA PUNTUACIÓN CADA VEZ QUE SE PIDE UNA NUEVA CARTA.
const sumaPuntuacion = (numero: number) => {
  if (numero === 10 || numero === 11 || numero === 12) {
    puntuacion = puntuacion + 0.5;
  } else {
    puntuacion = puntuacion + Number(numero);
  }
};

// MUESTRA EL MENSAJE AL PLANTARSE.
const mensajeFinal = (texto: string): void => {
  const mensaje = document.getElementById("gameover");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.style.display = "block";
    mensaje.textContent = texto;
  }
};

const ocultaMensajes = (id: string): void => {
  const mensaje = document.getElementById(id);
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLDivElement
  ) {
    mensaje.style.display = "none";
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
    // boton.disabled = true;
    // boton.hidden = true;
    boton.style.display = "none";
  }
};

// FUNCION PARA ACTIVAR LOS BOTONES.
const activaBoton = (id: string): void => {
  const boton = document.getElementById(id);
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    // boton.disabled = false;
    // boton.hidden = false;
    boton.style.display = "block";
  }
};

// MUESTRA NUEVO BOTÓN PARA NUEVA PARTIDA. CONTROLO QUE EL BOTÓN NO HAYA SIDO INSERTADO YA PARA NO REPETIRLO.
const nuevaPartida = () => {
  // reiniciar todo, ocultar textos, botones..
  puntuacion = 0;
  muestraPuntuacion();
  desactivaBoton("nueva");
  desactivaBoton("continuar");
  activaBoton("dameCarta");
  activaBoton("meplanto");
  limpiaCartas();
  ocultaMensajes("gameover");
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

const pintaMensajes = (puntuacion: number): string => {
  let mensaje: string = "";
  if (puntuacion <= 4) {
    mensaje = "Has sido muy conservador.";
  } else if (puntuacion > 4 && puntuacion < 6) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    mensaje = "Casi casi..";
  } else if (puntuacion === 7.5) {
    mensaje = "Lo has clavado! ¡Enhorabuena!";
  } else if (puntuacion > 7.5) {
    mensaje = "Lo siento pero te has pasado. Has perdido!!";
  }
  return mensaje;
};

// MOSTRAR LOS MENSAJES Y DESACTIVAR LOS BOTONES AL PLANTARSE. DESPUÉS LLAMA A LA FUNCIÓN.. ¿QUE PASARÍA SI?
const mePlanto = () => {
  let mensaje: string = pintaMensajes(puntuacion);
  mensajeFinal(mensaje);
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  activaBoton("nueva");
  activaBoton("continuar");
};

// QUE PASARÍA SI HUBIERA SEGUIDO.
const whatIf = () => {
  activaBoton("dameCarta");
};

// MUESTRA MENSAJE Y DESACTIVA EL BOTÓN.
const gameOver = () => {
  let mensaje: string = pintaMensajes(puntuacion);
  mensajeFinal(mensaje);
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  desactivaBoton("continuar");
  activaBoton("nueva");
};

// MANEJADOR DE EVENTOS. MANEJAMOS LOS 4 BOTONES.
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
  const botonNueva = document.getElementById("nueva");
  if (
    botonNueva !== null &&
    botonNueva !== undefined &&
    botonNueva instanceof HTMLButtonElement
  ) {
    botonNueva.addEventListener("click", nuevaPartida);
  }
  const seguir = document.getElementById("continuar");
  if (
    seguir !== null &&
    seguir !== undefined &&
    seguir instanceof HTMLButtonElement
  ) {
    seguir.addEventListener("click", whatIf);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  manejaEventos();
  muestraPuntuacion();
  // AL CARGAR LA PÁGINA DESACTIVAMOS Y OCULTAMOS LOS BOTONES DE NUEVA PARTIDA Y DE Y..SI.. PARA MOSTRARLOS CUANDO TOQUE.
  desactivaBoton("nueva");
  desactivaBoton("continuar");
});
