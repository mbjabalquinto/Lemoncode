import { partida, dameCarta, mePlanto, nuevaPartida, whatIf } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  partida();
  manejaEventos();
});

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
