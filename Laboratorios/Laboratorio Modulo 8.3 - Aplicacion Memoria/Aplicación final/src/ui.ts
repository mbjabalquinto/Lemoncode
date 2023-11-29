import {
  iniciaPartida,
  nuevoTablero,
  sePuedeVoltearLaCarta,
  voltearCarta,
  actualizaEstadoPartida,
  actualizaIndices,
} from "./motor";

import { Tablero, cartas } from "./modelo";

const compruebaElementoHtmlDiv = (
  contenedor: HTMLElement | null
): contenedor is HTMLDivElement => {
  return (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  );
};

const compruebaElementoHtmlImg = (
  contenedor: HTMLElement | null
): contenedor is HTMLImageElement => {
  return (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLImageElement
  );
};

const cambiaSrcCarta = (tablero: Tablero, indice: number): void => {
  const carta = document.getElementById(`img${indice}`);
  if (compruebaElementoHtmlImg(carta)) {
    carta.src = tablero.cartas[indice].imagen;
  }
};

// Cambio el color de las cartas al pulsar el botón nueva partida
const cambiaClaseDeTodasLasCartas = (): void => {
  for (let indice = 0; indice < 12; indice++) {
    const carta = document.getElementById(`carta${indice}`);
    if (compruebaElementoHtmlDiv(carta)) {
      carta.classList.add("elemento-activo");
    }
  }
};

// Cambio la clase del div para cambiar el color de fondo al mostrar la carta
const cambiaClaseCarta = (indice: number) => {
  const carta = document.getElementById(`carta${indice}`);
  if (compruebaElementoHtmlDiv(carta)) {
    carta.classList.add("elemento-sideB");
  }
};

const compruebaCarta = (tablero: Tablero, indice: number) => {
  // Acción cuando se pincha una carta
  // Primero comprobamos si la carta es volteable y la volteamos en caso afirmativo
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearCarta(tablero, indice);
    cambiaSrcCarta(tablero, indice);
    cambiaClaseCarta(indice);
    actualizaIndices(tablero, indice);
    actualizaEstadoPartida(tablero);
  }
};

// Mientras no se pulse inicar partida, no habrá respuesta si pinchan sobre las cartas.
export const comenzarPartida = () => {
  // Creo el tablero
  const tablero = nuevoTablero(cartas);
  // Inicio la partida
  iniciaPartida(tablero);
  // Comiendo a contorlar los clicks sobre las cartas
  controladorDeEventosDeCartas(tablero);
  // Cambio la clase de todos los divs para el efecto inicial de partida
  cambiaClaseDeTodasLasCartas();
};

const controladorDeEventosDeCartas = (tablero: Tablero): void => {
  // Obtén todos los índices de las cartas
  let indiceCartas = document.querySelectorAll(".elemento");
  // Añade el mismo controlador de eventos a todas las cartas
  indiceCartas.forEach((indiceCarta) => {
    indiceCarta.addEventListener("click", (event) => {
      // Obtén el elemento que ha sido clicado
      let target = event.target as HTMLElement;
      console.log(target);
      // Lee el valor del atributo data-indice-array
      if (target !== null && target !== undefined) {
        let indice = Number(target.dataset.indiceArray);
        console.log(indice);
        compruebaCarta(tablero, indice);
      }
    });
  });
};
