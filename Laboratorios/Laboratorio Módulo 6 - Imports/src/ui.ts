import { datos } from "./modelo";
import { obtenerCarta, teHasPasado, loHasClavado } from "./motor";

// ES LLAMADA EN MAIN AL CARGAR EL DOM.
export const partida = (): void => {
  muestraPuntuacion();
  desactivaBoton("nueva");
  desactivaBoton("continuar");
};
// AL PULSAR EL BOTÓN DAME CARTA.
export const dameCarta = (): void => {
  let carta: string = obtenerCarta();
  pintaCarta(carta);
  muestraPuntuacion();
  controlaEstadoPartida();
};

// MUESTRA NUEVO BOTÓN PARA NUEVA PARTIDA. CONTROLO QUE EL BOTÓN NO HAYA SIDO INSERTADO YA PARA NO REPETIRLO.
export const nuevaPartida = () => {
  // reiniciar todo, ocultar textos, botones..
  datos.puntuacion = 0;
  muestraPuntuacion();
  desactivaBoton("nueva");
  desactivaBoton("continuar");
  activaBoton("dameCarta");
  activaBoton("meplanto");
  limpiaCartas();
  ocultaMensajes("gameover");
};

// CONTROLA SI SE HA PASADO O SI LO HA CLAVADO. EN ESTOS DOS CASOS NO ESPERA QUE SE PULSE EL BOTÓN.
export const controlaEstadoPartida = () => {
  if (teHasPasado()) {
    gameOver();
  } else if (loHasClavado()) {
    hasGanado();
  }
};

// CUANDO SE GANA LA PARTIDA.
const hasGanado = () => {
  let mensaje: string = pintaMensajes();
  mensajeFinal(mensaje);
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  desactivaBoton("continuar");
  activaBoton("nueva");
};

// QUE PASARÍA SI HUBIERA SEGUIDO.
export const whatIf = () => {
  dameCarta();
};

// MUESTRA MENSAJE Y DESACTIVA EL BOTÓN.
const gameOver = () => {
  let mensaje: string = pintaMensajes();
  mensajeFinal(mensaje);
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  desactivaBoton("continuar");
  activaBoton("nueva");
};

// INSERTA EN PANTALLA LA NUEVA CARTA.
export const pintaCarta = (carta: string): void => {
  const card = document.getElementById("cartas");
  if (card !== null && card !== undefined && card instanceof HTMLDivElement) {
    const img = document.createElement("img");
    img.src = carta;
    img.alt = "Carta de baraja española.";
    card.appendChild(img);
  }
};

// ELIMINA TODOS LOS HIJOS DEL ELEMENTO DIV. LIMPIA TODAS LAS CARTAS ANTERIORES PARA COMENZAR DE NUEVO.
export const limpiaCartas = (): void => {
  const card = document.getElementById("cartas");
  if (card !== null && card !== undefined && card instanceof HTMLDivElement) {
    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }
  }
};

// PINTA EL MENSAJE CORRESPONDIENTE SEGÚN LA PUNTUACIÓN.
export const pintaMensajes = (): string => {
  let mensaje: string = "";
  if (datos.puntuacion <= 4) {
    mensaje = "Has sido muy conservador.";
  } else if (datos.puntuacion > 4 && datos.puntuacion < 6) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (datos.puntuacion >= 6 && datos.puntuacion <= 7) {
    mensaje = "Casi casi..";
  } else if (datos.puntuacion === 7.5) {
    mensaje = "Lo has clavado! ¡Enhorabuena!";
  } else if (datos.puntuacion > 7.5) {
    mensaje = "Lo siento pero te has pasado. Has perdido!!";
  }
  return mensaje;
};

// MUESTRA EL MENSAJE AL PLANTARSE.
export const mensajeFinal = (texto: string): void => {
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

export const ocultaMensajes = (id: string): void => {
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
export const desactivaBoton = (id: string): void => {
  const boton = document.getElementById(id);
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.style.display = "none";
  }
};

// FUNCION PARA ACTIVAR LOS BOTONES.
export const activaBoton = (id: string): void => {
  const boton = document.getElementById(id);
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.style.display = "block";
  }
};

// MUESTRA EL MENSAJE CON LA PUNTUACIÓN EN PANTALLA.
export const muestraPuntuacion = (): void => {
  const marcador = document.getElementById("puntuacion");
  if (
    marcador !== null &&
    marcador !== undefined &&
    marcador instanceof HTMLDivElement
  ) {
    marcador.textContent = "Puntuación:  " + datos.puntuacion.toString();
  }
};

// MOSTRAR LOS MENSAJES Y DESACTIVAR LOS BOTONES AL PLANTARSE. DESPUÉS LLAMA A LA FUNCIÓN.. ¿QUE PASARÍA SI?
export const mePlanto = () => {
  let mensaje: string = pintaMensajes();
  mensajeFinal(mensaje);
  desactivaBoton("dameCarta");
  desactivaBoton("meplanto");
  activaBoton("nueva");
  activaBoton("continuar");
};
