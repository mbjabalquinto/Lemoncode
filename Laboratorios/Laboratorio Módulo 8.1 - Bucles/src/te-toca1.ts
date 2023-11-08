interface Ropa {
  foto: string;
  tipoProducto: string;
  precio: number;
}

const ropa: Ropa[] = [
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-1.jpg",
    tipoProducto: "Camisa",
    precio: 25,
  },
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-2.jpg",
    tipoProducto: "Camiseta",
    precio: 22.99,
  },
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-3.jpg",
    tipoProducto: "Vestido",
    precio: 34.99,
  },
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-4.jpg",
    tipoProducto: "Vaqueros",
    precio: 79.99,
  },
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-5.jpg",
    tipoProducto: "Polo",
    precio: 44.95,
  },
  {
    foto: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/online-shop/images/image-6.jpg",
    tipoProducto: "Camisa",
    precio: 44.99,
  },
];

interface Carrito {
  tipoProducto: string;
  precio: number;
}

const carrito: Carrito[] = [
  {
    tipoProducto: "Camiseta",
    precio: 19.99,
  },
  {
    tipoProducto: "Pantalones",
    precio: 34.99,
  },
  {
    tipoProducto: "Jersey",
    precio: 44.99,
  },
  {
    tipoProducto: "Vaqueros",
    precio: 79.99,
  },
  {
    tipoProducto: "Polo",
    precio: 44.95,
  },
];

const sonLosGastosDeEnvioGratis = () => {
  let importe: number = 0;
  for (let i = 0; i < carrito.length; i++) {
    importe += carrito[i].precio;
    if (importe > 100) {
      break;
    }
  }
  return importe > 100;
};

const pintaRopa = (ropa: Ropa): void => {
  const div = document.getElementById("lista-ropa");
  const imagen = document.createElement("img");
  const tipoProducto = document.createElement("p");
  const precio = document.createElement("p");
  const cardDiv = document.createElement("div");

  imagen.src = ropa.foto;
  tipoProducto.textContent = ropa.tipoProducto;
  precio.textContent = `${ropa.precio} €`;
  cardDiv.setAttribute("class", "card");

  if (div !== null && div !== undefined && div instanceof HTMLDivElement) {
    div.appendChild(cardDiv);
    cardDiv.appendChild(imagen);
    cardDiv.appendChild(tipoProducto);
    cardDiv.appendChild(precio);
  }
};

const muestraColeccionDePrendas = (): void => {
  for (let i = 0; i < ropa.length; i++) {
    pintaRopa(ropa[i]);
  }
};

document.addEventListener("DOMContentLoaded", muestraColeccionDePrendas);
