interface Cartas {
  carta01: string;
  carta02: string;
}

const cartas: Cartas = {
  carta01:
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  carta02:
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
};

const pintaCarta = (carta: keyof typeof cartas): void => {
  const elemento = document.getElementById(carta);
  if (
    elemento !== null &&
    elemento !== undefined &&
    elemento instanceof HTMLImageElement
  ) {
    elemento.src = cartas[carta];
  }
};

const cambiaClaseContenedor = (contenedor: HTMLDivElement): void => {
  contenedor.classList.add("elemento-sideB");
};

const compruebaElementoHtml = (
  contenedor: HTMLElement | null
): contenedor is HTMLDivElement => {
  return (
    contenedor !== null &&
    contenedor !== undefined &&
    contenedor instanceof HTMLDivElement
  );
};

const controladorDeEventos = (): void => {
  const contenedor01 = document.getElementById("contenedor01");
  if (compruebaElementoHtml(contenedor01)) {
    contenedor01.addEventListener("click", () => {
      pintaCarta("carta01");
      cambiaClaseContenedor(contenedor01);
    });
  }

  const contenedor02 = document.getElementById("contenedor02");
  if (compruebaElementoHtml(contenedor02)) {
    contenedor02.addEventListener("click", () => {
      pintaCarta("carta02");
      cambiaClaseContenedor(contenedor02);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  controladorDeEventos();
});
