import { comenzarPartida } from "./ui";

const eventoStart = (): void => {
  const boton = document.getElementById("start");
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLInputElement
  ) {
    boton.addEventListener("click", comenzarPartida);
  } else {
    console.log("No se puede crear el evento.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  eventoStart();
});
