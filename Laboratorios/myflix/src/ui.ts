import { flechas } from "./constantes";
import {
  Pelicula,
  nombreClases,
  ListaPeliculasConfiguracion,
  TipoFlecha,
} from "./modelo";
import { filtrarPeliculas } from "./motor";

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (
  nombreClase: string,
  contenedor: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  div.id = nombreClase;
  contenedor.appendChild(div);
  return div;
};

// crea el titulo y lo añade al div de peliculas.
const agregarTitulo = (
  tituloSeccion: string,
  contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  añadirFlecha(peliculaContenedor, "izquierda");
  añadirFlecha(peliculaContenedor, "derecha");
};

const pintarPelicula = (
  pelicula: Pelicula,
  peliculaContenedor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(
    nombreClases.pelicula,
    peliculaContenedor
  );
  divPelicula.innerHTML = `
  <img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
  <h3>${pelicula.titulo}</h3>
  `;
};

const pintarPeliculas = (
  peliculas: Pelicula[],
  peliculaContenedor: HTMLDivElement
): void => {
  peliculas.forEach((pelicula) => {
    pintarPelicula(pelicula, peliculaContenedor);
  });
};

export const pintarListaPeliculas = (
  listaPeliculas: Pelicula[],
  configuracion: ListaPeliculasConfiguracion
): void => {
  // obtener el div principal
  const appDiv = document.getElementById("principal");
  // comprobar que existe
  if (appDiv && appDiv instanceof HTMLDivElement) {
    // crear un div para las películas
    const creaDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);
    // crea el titulo y lo añade al div de peliculas
    agregarTitulo(configuracion.titulo, creaDivPeliculas);

    // crear div lista de peliculas
    const divListaPeliculas = crearContenedor(
      nombreClases.listaPeliculas,
      creaDivPeliculas
    );
    // crear div contenedor de películas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor,
      divListaPeliculas
    );

    // añadir flechas
    pintarFlechas(divPeliculasContenedor);

    // pintar películas
    pintarPeliculas(listaPeliculas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};

const añadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;

  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "derecha" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);

  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });
  contenedor.appendChild(divFlecha);
};
