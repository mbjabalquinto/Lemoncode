interface Cartas {
  idFoto: number;
  imagen: string;
}

const cartas: Cartas[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];

const compruebaCarta = (indice: number): void => {
  const carta = document.getElementById(`carta${indice}`);
  if (
    carta !== null &&
    carta !== undefined &&
    carta instanceof HTMLImageElement
  ) {
    carta.src = cartas[indice].imagen;
  }
};

const eventos = () => {
  const carta1 = document.getElementById("contenedor0");
  if (
    carta1 !== null &&
    carta1 !== undefined &&
    carta1 instanceof HTMLDivElement
  ) {
    carta1.addEventListener("click", (event) => {
      if (event.currentTarget instanceof HTMLElement) {
        const indice1 = Number(
          event.currentTarget.getAttribute("data-indice-array")
        );
        compruebaCarta(indice1);
        console.log(indice1);
      }
    });
  }
  const carta2 = document.getElementById("contenedor1");
  if (
    carta2 !== null &&
    carta2 !== undefined &&
    carta2 instanceof HTMLDivElement
  ) {
    carta2.addEventListener("click", (event) => {
      if (event.currentTarget instanceof HTMLElement) {
        const indice2 = Number(
          event.currentTarget.getAttribute("data-indice-array")
        );
        compruebaCarta(indice2);
        console.log(indice2);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", eventos);
