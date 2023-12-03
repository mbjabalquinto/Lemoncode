import {
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
  actualizaContador,
  reseteaContador,
} from "./motor";

import { Tablero, cartas, fotoFinal, contador } from "./modelo";

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

const pintaContador = (): void => {
  const intentos = document.getElementById("contador");
  if (compruebaElementoHtmlDiv(intentos)) {
    intentos.textContent = `Intentos: ${contador.valor}`;
  }
};

const reseteaImagenes = () => {
  for (let i = 0; i < 12; i++) {
    const imagen = document.getElementById(`img${i}`);
    if (
      imagen !== null &&
      imagen !== undefined &&
      imagen instanceof HTMLImageElement
    ) {
      imagen.src = "";
    }
  }
};

const cambiaSrcCarta = (tablero: Tablero, indice: number): void => {
  const carta = document.getElementById(`img${indice}`);
  if (compruebaElementoHtmlImg(carta)) {
    carta.src = tablero.cartas[indice].imagen;
    carta.classList.remove("ocultar");
  }
};

const quitaSrcCarta = (indice: number): void => {
  const carta = document.getElementById(`img${indice}`);
  if (compruebaElementoHtmlImg(carta)) {
    carta.classList.add("ocultar");
    setTimeout(() => {
      carta.src = "";
    }, 2000);
  }
};

// Cambio el color de las cartas al pulsar el botón nueva partida
const cambiaClaseDeTodasLasCartas = (tablero: Tablero): void => {
  for (let indice = 0; indice < 12; indice++) {
    const carta = document.getElementById(`carta${indice}`);
    if (
      compruebaElementoHtmlDiv(carta) &&
      tablero.estadoPartida === "ceroCartasLevantadas"
    ) {
      carta.classList.add("elemento-activo");
      carta.classList.remove("elemento-sideB");
    }
  }
};

const deshabilitarInteraccion = (contenedor: HTMLElement) => {
  contenedor.style.pointerEvents = "none";
};

const habilitarInteraccion = (contenedor: HTMLElement) => {
  contenedor.style.pointerEvents = "";
};

const desactivaBotonNuevaPartida = () => {
  const boton = document.getElementById("start");
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLInputElement
  ) {
    deshabilitarInteraccion(boton);
  }
};

const activaBotonNuevaPartida = () => {
  const boton = document.getElementById("start");
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLInputElement
  ) {
    habilitarInteraccion(boton);
  }
};

const compruebaPareja = (tablero: Tablero) => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;
  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(indiceA, indiceB, tablero);
    } else {
      parejaNoEncontrada(indiceA, indiceB, tablero);
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
        }, 2000);
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
};

const cambiaClaseContenedorDeCartas = (tablero: Tablero) => {
  const contenedor = document.getElementById("contenedor-elementos");
  if (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  ) {
    if (tablero.estadoPartida === "partidaCompletada") {
      contenedor.classList.add("contenedor-elementos-oculto");
    } else {
      contenedor.classList.remove("contenedor-elementos-oculto");
    }
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

const ocultaFelicitacion = () => {
  const felicitacion = document.getElementById("felicitacion");
  if (
    felicitacion !== null &&
    felicitacion !== undefined &&
    felicitacion instanceof HTMLImageElement
  ) {
    felicitacion.src = "";
  }
};

const finalizaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "partidaCompletada";
  setTimeout(() => {
    insertaFelicitacion(fotoFinal);
  }, 2000);
  cambiaClaseContenedorDeCartas(tablero);
  activaBotonNuevaPartida();
};

const controlaElJuego = (tablero: Tablero, indice: number) => {
  // Acción cuando se pincha una carta
  compruebaCarta(tablero, indice);
  actualizaIndices(tablero, indice);
  actualizaEstadoPartida(tablero);
  if (hayDosCartasLevantadas(tablero)) {
    compruebaPareja(tablero);
    actualizaContador();
    pintaContador();
  }
  if (esPartidaCompleta(tablero)) {
    finalizaPartida(tablero);
  }
};

// Mientras no se pulse inicar partida, no habrá respuesta si pinchan sobre las cartas.
export const comenzarPartida = () => {
  const tablero = nuevoTablero(cartas);
  // Pongo visible el contenedor de las cartas (se oculta al finalizar la partida).
  ocultaFelicitacion();
  cambiaClaseContenedorDeCartas(tablero);
  // Desactivo boton de nueva partida hasta que esta finalice
  desactivaBotonNuevaPartida();
  reseteaImagenes();
  reseteaContador();
  pintaContador();
  // Cambio la clase de todos los divs para el efecto inicial de partida
  cambiaClaseDeTodasLasCartas(tablero);
  // Comiendo a contorlar los clicks sobre las cartas
  controladorDeEventosDeCartas(tablero);
};

const controladorDeEventosDeCartas = (tablero: Tablero): void => {
  // Obtén todos los índices de las cartas
  let indiceCartas = document.querySelectorAll(".elemento");
  // Añade el mismo controlador de eventos a todas las cartas
  indiceCartas.forEach((indiceCarta) => {
    // Primero, elimina el controlador de eventos existente
    let nuevoIndiceCarta = indiceCarta.cloneNode(true);
    if (indiceCarta.parentNode) {
      indiceCarta.parentNode.replaceChild(nuevoIndiceCarta, indiceCarta);
    }
    // Luego, añade el nuevo controlador de eventos
    nuevoIndiceCarta.addEventListener("click", (event) => {
      // Obtén el elemento que ha sido clicado
      let target = event.target as HTMLElement;
      // Lee el valor del atributo data-indice-array
      if (target !== null && target !== undefined) {
        let indice = Number(target.dataset.indiceArray);
        controlaElJuego(tablero, indice);
      }
    });
  });
};
