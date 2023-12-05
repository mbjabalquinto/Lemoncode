import { reseteaObjetoCartas, barajarCartas, sePuedeVoltearLaCarta, voltearCarta, actualizaEstadoPartida, actualizaIndices, sonPareja, parejaEncontrada, parejaNoEncontrada, hayDosCartasLevantadas, esPartidaCompleta, actualizaContador, reseteaContador, iniciaPartida, } from "./motor";
import { fotoFinal, contador, tablero } from "./modelo";
// COMPROBAMOS ELEMENTOS HTML.
const compruebaElementoHtmlDiv = (contenedor) => {
    return (contenedor !== null &&
        contenedor !== undefined &&
        contenedor instanceof HTMLDivElement);
};
const compruebaElementoHtmlImg = (contenedor) => {
    return (contenedor !== null &&
        contenedor !== undefined &&
        contenedor instanceof HTMLImageElement);
};
// AVISAMOS SI HACEN CLIC SOBRE UNA CARTA YA VOLTEADA.
const muestraAvisoCartaYaLevantada = () => {
    const aviso = document.getElementById("aviso");
    if (aviso !== null &&
        aviso !== undefined &&
        aviso instanceof HTMLHeadingElement) {
        aviso.textContent = "La carta que has pulsado ya se estaba mostrando.";
        setTimeout(() => {
            aviso.textContent = "";
        }, 2000);
    }
};
// MOSTRAMOS CONTADOR DE INTENTOS.
const pintaContador = () => {
    const intentos = document.getElementById("contador");
    if (compruebaElementoHtmlDiv(intentos)) {
        intentos.textContent = `Intentos: ${contador.valor}`;
    }
};
// BORRAMOS TODAS LAS IMÁGENES PARA REINICIAR EL TABLERO.
const reseteaImagenes = () => {
    for (let i = 0; i < 12; i++) {
        const imagen = document.getElementById(`img${i}`);
        if (imagen !== null &&
            imagen !== undefined &&
            imagen instanceof HTMLImageElement) {
            imagen.src = "";
        }
    }
};
// MUESTRO/OCULTO CARTAS SEGÚN PROCEDA.
const cambiaSrcCarta = (indice) => {
    const carta = document.getElementById(`img${indice}`);
    if (compruebaElementoHtmlImg(carta)) {
        carta.src = tablero.cartas[indice].imagen;
        carta.classList.remove("ocultar");
        console.log(carta.src);
    }
};
const quitaSrcCarta = (indice) => {
    const carta = document.getElementById(`img${indice}`);
    if (compruebaElementoHtmlImg(carta)) {
        carta.classList.add("ocultar");
        setTimeout(() => {
            carta.src = "";
        }, 1000);
    }
};
// Cambio el color de las cartas al pulsar el botón nueva partida
const cambiaClaseDeTodasLasCartas = () => {
    for (let indice = 0; indice < 12; indice++) {
        const carta = document.getElementById(`carta${indice}`);
        if (compruebaElementoHtmlDiv(carta) &&
            tablero.estadoPartida === "ceroCartasLevantadas") {
            carta.classList.add("elemento-activo");
            carta.classList.remove("elemento-sideB");
        }
    }
};
// ACTIVO/DESACTIVO LOS CLICS SOBRE LAS CARTAS SEGÚN LA SITUACIÓN DE LA PARTIDA.
const deshabilitarInteraccion = (contenedor) => {
    contenedor.style.pointerEvents = "none";
};
const habilitarInteraccion = (contenedor) => {
    contenedor.style.pointerEvents = "";
};
// DESACTIVO BOTÓN NUEVA PARTIDA.
const desactivaBotonNuevaPartida = () => {
    const boton = document.getElementById("start");
    if (boton !== null &&
        boton !== undefined &&
        boton instanceof HTMLInputElement) {
        deshabilitarInteraccion(boton);
    }
};
// REACTIVO BOTÓN NUEVA PARTIDA.
const activaBotonNuevaPartida = () => {
    const boton = document.getElementById("start");
    if (boton !== null &&
        boton !== undefined &&
        boton instanceof HTMLInputElement) {
        habilitarInteraccion(boton);
    }
};
// COMPROBAMOS SIN SON PAREJA Y ACTUAMOS SEGÚN CADA CASO.
const compruebaPareja = () => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined) {
        if (sonPareja(indiceA, indiceB)) {
            parejaEncontrada(indiceA, indiceB);
            console.log("pareja Encontrada");
        }
        else {
            parejaNoEncontrada(indiceA, indiceB);
            // Controlamos que no se cuelen clics durante el setTimeOut.
            const contenedor = document.getElementById("contenedor-elementos");
            if (contenedor) {
                console.log("pareja No encontrada");
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
const cambiaClaseCarta = (indice) => {
    const carta = document.getElementById(`carta${indice}`);
    if (compruebaElementoHtmlDiv(carta)) {
        if (carta.classList.contains("elemento-activo")) {
            carta.classList.remove("elemento-activo");
            carta.classList.add("elemento-sideB");
        }
        else if (carta.classList.contains("elemento-sideB")) {
            carta.classList.remove("elemento-sideB");
            carta.classList.add("elemento-activo");
        }
    }
};
// VOLTEAMOS LA CARTA EN CASO DE QUE SEA PROCEDENTE.
const compruebaCarta = (indice) => {
    if (sePuedeVoltearLaCarta(indice)) {
        voltearCarta(indice);
        cambiaClaseCarta(indice);
        cambiaSrcCarta(indice);
        actualizaIndices(indice);
        actualizaEstadoPartida();
    }
    else if (tablero.estadoPartida !== "partidaNoIniciada") {
        muestraAvisoCartaYaLevantada();
    }
};
const cambiaClaseContenedorDeCartas = () => {
    const contenedor = document.getElementById("contenedor-elementos");
    if (contenedor !== null &&
        contenedor !== undefined &&
        contenedor instanceof HTMLDivElement) {
        if (tablero.estadoPartida === "partidaCompletada") {
            contenedor.classList.add("contenedor-elementos-oculto");
        }
        else {
            contenedor.classList.remove("contenedor-elementos-oculto");
        }
    }
};
const insertaFelicitacion = (ruta) => {
    const felicitacion = document.getElementById("felicitacion");
    if (felicitacion !== null &&
        felicitacion !== undefined &&
        felicitacion instanceof HTMLImageElement) {
        felicitacion.src = ruta;
    }
};
const ocultaFelicitacion = () => {
    const felicitacion = document.getElementById("felicitacion");
    if (felicitacion !== null &&
        felicitacion !== undefined &&
        felicitacion instanceof HTMLImageElement) {
        felicitacion.src = "";
    }
};
const finalizaPartida = () => {
    tablero.estadoPartida = "partidaCompletada";
    setTimeout(() => {
        insertaFelicitacion(fotoFinal);
    }, 2000);
    cambiaClaseContenedorDeCartas();
    activaBotonNuevaPartida();
};
// SE EJECUTA AL CLICAR CADA CARTA.
const controlaElJuego = (indice) => {
    compruebaCarta(indice);
    if (hayDosCartasLevantadas()) {
        compruebaPareja();
        actualizaContador();
        pintaContador();
    }
    if (esPartidaCompleta()) {
        finalizaPartida();
    }
};
// RESETEO LOS VALORES DEL TABLERO Y BARAJO LAS CARTAS.
const nuevoTablero = () => {
    reseteaObjetoCartas();
    barajarCartas();
    tablero.estadoPartida = "partidaNoIniciada";
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
};
// SE EJECUTA AL CLICAR EL BOTÓN DE NUEVA PARTIDA.
export const comenzarPartida = () => {
    nuevoTablero();
    // Pongo visible el contenedor de las cartas (se oculta al finalizar la partida).
    ocultaFelicitacion();
    cambiaClaseContenedorDeCartas();
    // Desactivo boton de nueva partida hasta que esta finalice
    desactivaBotonNuevaPartida();
    reseteaImagenes();
    reseteaContador();
    pintaContador();
    iniciaPartida();
    // Cambio la clase de todos los divs para el efecto inicial de partida
    cambiaClaseDeTodasLasCartas();
};
// EVENTOS DE LAS CARTAS.
export const controladorDeEventosDeCartas = () => {
    // Obtén todos los índices de las cartas
    let indiceCartas = document.querySelectorAll(".elemento");
    // Añade el mismo controlador de eventos a todas las cartas
    indiceCartas.forEach((indiceCarta) => {
        // Añade controlador de eventos
        indiceCarta.addEventListener("click", (event) => {
            // Obtén el elemento que ha sido clicado
            // MUCHO OJO!! event.Target distingue si se hace clic sobre el div o sobre la imagen.. lo cual será un problema
            // una vez esté volteada la carta. Se soluciona con event.currentTarget.
            let target = event.currentTarget;
            // Lee el valor del atributo data-indice-array
            if (target !== null && target !== undefined) {
                let indice = Number(target.dataset.indiceArray);
                controlaElJuego(indice);
            }
        });
    });
};
// EVENTO DEL BOTÓN NUEVA PARTIDA
export const controlaEventoBotonPartidaNueva = () => {
    const boton = document.getElementById("start");
    if (boton !== null &&
        boton !== undefined &&
        boton instanceof HTMLInputElement) {
        boton.addEventListener("click", comenzarPartida);
    }
    else {
        console.log("No se puede crear el evento.");
    }
};
