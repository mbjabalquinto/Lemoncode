import { Carta, Tablero } from "./modelo";

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  let currentIndex = cartas.length;
  let temporaryValue, randomIndex;

  // Mientras queden elementos por mezclar...
  while (0 !== currentIndex) {
    // Selecciona un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E intercambia con el elemento actual.
    temporaryValue = cartas[currentIndex];
    cartas[currentIndex] = cartas[randomIndex];
    cartas[randomIndex] = temporaryValue;
  }
  return cartas;
};

// Creo el tablero con las cartas ya barajadas y lo devuelvo.
export const nuevoTablero = (cartas: Carta[]): Tablero => {
  barajarCartas(cartas);
  const tablero: Tablero = {
    cartas: barajarCartas(cartas),
    estadoPartida: "partidaNoIniciada",
  };
  return tablero;
};

// Comprobamos si la carta ha sido encontrada, si ya está vuelta y si hay cartas ya levantadas en este turno
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  let respuesta: boolean = false;
  if (
    !tablero.cartas[indice].encontrada &&
    !tablero.cartas[indice].estaVuelta
  ) {
    if (
      tablero.estadoPartida === "ceroCartasLevantadas" ||
      tablero.estadoPartida === "unaCartaLevantada"
    ) {
      respuesta = true;
    }
  } else {
    respuesta = false;
  }
  return respuesta;
};

export const voltearCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
};

export const actualizaIndices = (tablero: Tablero, indice: number): void => {
  if (tablero.estadoPartida === "ceroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
  } else if (tablero.estadoPartida === "unaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
  }
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto
    ? true
    : false;
};

export const parejaEncontrada = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const parejaNoEncontrada = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const esPartidaCompleta = (tablero: Tablero): boolean =>
  tablero.cartas.every((carta) => carta.encontrada);

export const iniciaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const actualizaEstadoPartida = (tablero: Tablero): void => {
  if (tablero.estadoPartida === "ceroCartasLevantadas") {
    tablero.estadoPartida = "unaCartaLevantada";
  } else if (tablero.estadoPartida === "unaCartaLevantada") {
    tablero.estadoPartida = "dosCartasLevantadas";
  } else if (tablero.estadoPartida === "dosCartasLevantadas") {
    tablero.estadoPartida = "ceroCartasLevantadas";
  }
};

export const hayDosCartasLevantadas = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "dosCartasLevantadas" ? true : false;
};
