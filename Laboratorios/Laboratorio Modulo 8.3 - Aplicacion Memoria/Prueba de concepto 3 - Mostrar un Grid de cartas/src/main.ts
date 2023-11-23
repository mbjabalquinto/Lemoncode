const pintaCarta = (): void => {
  const elemento = document.getElementById("carta");
  if (
    elemento !== null &&
    elemento !== undefined &&
    elemento instanceof HTMLImageElement
  ) {
    elemento.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
  }
};

const controladorDeEventos = (): void => {
  const contenedor = document.getElementById("container");
  if (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  ) {
    contenedor.addEventListener("click", pintaCarta);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  controladorDeEventos();
});
