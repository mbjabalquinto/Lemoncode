let mostrando: boolean = false;

const pintaCarta = (contenedor: HTMLDivElement): void => {
  if (!mostrando) {
    const imagen = document.createElement("img");
    imagen.classList.add("carta");
    imagen.id = "carta";
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
    contenedor.appendChild(imagen);
    mostrando = true;
  } else {
    const imagen = document.getElementById("carta");
    if (imagen) {
      imagen.remove();
      mostrando = false;
    } else {
      console.log("Error al ocultar carta");
    }
  }
};

const controladorDeEventos = (): void => {
  const contenedor = document.getElementById("container");
  if (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  ) {
    contenedor.addEventListener("click", () => pintaCarta(contenedor));
  }
};

document.addEventListener("DOMContentLoaded", () => {
  controladorDeEventos();
});
