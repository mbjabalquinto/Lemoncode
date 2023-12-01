import {
  iniciaPartida,
  nuevoTablero,
  sePuedeVoltearLaCarta,
  voltearCarta,
  actualizaEstadoPartida,
  actualizaIndices,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
  hayDosCartasLevantadas,
  esPartidaCompleta,
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

const quitaSrcCarta = (indice: number): void => {
  const carta = document.getElementById(`img${indice}`);
  if (compruebaElementoHtmlImg(carta)) {
    carta.src = "";
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

const deshabilitarInteraccion = (contenedor: HTMLElement) => {
  contenedor.style.pointerEvents = "none";
};

const habilitarInteraccion = (contenedor: HTMLElement) => {
  contenedor.style.pointerEvents = "";
};

const compruebaPareja = (tablero: Tablero) => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;
  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(indiceA, indiceB, tablero);
      console.log("son pareja");
    } else {
      parejaNoEncontrada(indiceA, indiceB, tablero);
      console.log("pareja no encontrada");
      // Controlamos que no se cuelen clics durante el setTimeOut.
      const contenedor = document.getElementById("contenedor-elementos");
      if (contenedor) {
        deshabilitarInteraccion(contenedor);
        setTimeout(() => {
          quitaSrcCarta(indiceA);
          quitaSrcCarta(indiceB);
          cambiaClaseCarta(indiceA);
          cambiaClaseCarta(indiceB);
          habilitarInteraccion(contenedor);
        }, 1000);
      }
    }
  }
};

// Cambio la clase del div para cambiar el color de fondo al mostrar la carta
const cambiaClaseCarta = (indice: number) => {
  const carta = document.getElementById(`carta${indice}`);
  if (compruebaElementoHtmlDiv(carta)) {
    if (carta.classList.contains("elemento-activo")) {
      carta.classList.remove("elemento-activo");
      carta.classList.add("elemento-sideB");
    } else if (carta.classList.contains("elemento-sideB")) {
      carta.classList.remove("elemento-sideB");
      carta.classList.add("elemento-activo");
    }
  }
};

const compruebaCarta = (tablero: Tablero, indice: number) => {
  // Primero comprobamos si la carta es volteable y la volteamos en caso afirmativo
  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearCarta(tablero, indice);
    cambiaSrcCarta(tablero, indice);
    cambiaClaseCarta(indice);
  }
  console.log(tablero);
  console.log(`Indice: ${indice}`);
};

const cambiaClaseContenedorDeCartas = () => {
  const contenedor = document.getElementById("contenedor-elementos");
  if (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  ) {
    contenedor.classList.add("contenedor-elementos-oculto");
  }
};

const insertaFelicitacion = (ruta: string) => {
  const felicitacion = document.getElementById("felicitacion");
  if (
    felicitacion !== null &&
    felicitacion !== undefined &&
    felicitacion instanceof HTMLImageElement
  ) {
    felicitacion.src = ruta;
  }
};

const finalizaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "partidaCompletada";
  setTimeout(() => {
    cambiaClaseContenedorDeCartas();
  }, 2000);

  insertaFelicitacion("../images/avatar.png");
};

const controlaElJuego = (tablero: Tablero, indice: number) => {
  // Acción cuando se pincha una carta
  compruebaCarta(tablero, indice);
  actualizaIndices(tablero, indice);
  actualizaEstadoPartida(tablero);
  if (hayDosCartasLevantadas(tablero)) {
    console.log("hay dos cartas levantadas");
    compruebaPareja(tablero);
  }
  if (esPartidaCompleta(tablero)) {
    finalizaPartida(tablero);
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
        controlaElJuego(tablero, indice);
      }
    });
  });
};
