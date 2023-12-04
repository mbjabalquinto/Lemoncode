import { contador, cartas, tablero } from "./modelo";

export const barajarCartas = (): void => {
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
};

export const actualizaContador = (): void => {
  contador.valor++;
};

export const reseteaContador = (): void => {
  contador.valor = 0;
};

export const reseteaObjetoCartas = () => {
  for (let i = 0; i < cartas.length; i++) {
    cartas[i] = {
      ...cartas[i],
      estaVuelta: false,
      encontrada: false,
    };
  }
};

// Comprobamos si la carta ha sido encontrada, si ya está vuelta y si hay cartas ya levantadas en este turno
export const sePuedeVoltearLaCarta = (indice: number): boolean => {
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

export const voltearCarta = (indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
};

export const actualizaIndices = (indice: number): void => {
  if (tablero.estadoPartida === "ceroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    console.log("actualizado indiceA");
  } else if (tablero.estadoPartida === "unaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    console.log("actualizado indiceB");
  } else {
    console.log("No se actualizaron los índices.");
  }
};

export const sonPareja = (indiceA: number, indiceB: number): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto
    ? true
    : false;
};

export const parejaEncontrada = (indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const parejaNoEncontrada = (indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const esPartidaCompleta = (): boolean =>
  tablero.cartas.every((carta) => carta.encontrada);

export const iniciaPartida = (): void => {
  tablero.estadoPartida = "ceroCartasLevantadas";
};

export const actualizaEstadoPartida = (): void => {
  if (tablero.estadoPartida === "ceroCartasLevantadas") {
    tablero.estadoPartida = "unaCartaLevantada";
  } else if (tablero.estadoPartida === "unaCartaLevantada") {
    tablero.estadoPartida = "dosCartasLevantadas";
  } else if (tablero.estadoPartida === "dosCartasLevantadas") {
    tablero.estadoPartida = "ceroCartasLevantadas";
  }
};

export const hayDosCartasLevantadas = (): boolean => {
  return tablero.estadoPartida === "dosCartasLevantadas" ? true : false;
};
