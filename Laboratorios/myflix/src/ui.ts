import { flechas } from "./constantes";
import { Pelicula, nombreClases, TipoFlecha } from "./modelo";

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (nombreClase: string): HTMLDivElement => {
  const listaPeliculas = document.createElement("div");
  listaPeliculas.classList.add(nombreClase);
  listaPeliculas.id = nombreClase;
  return listaPeliculas;
};

export const pintarListaPeliculas = (
  tituloSeccion: string,
  listaPeliculas: Pelicula[]
): void => {
  // obtener el div principal
  const appDiv = document.getElementById("principal");
  // comprobar que existe
  if (appDiv && appDiv instanceof HTMLDivElement) {
    // crear un div para las películas
    const creaDivPeliculas = crearContenedor(nombreClases.peliculas);
    // añadimos el div de películas al div principal
    appDiv.appendChild(creaDivPeliculas);
    // crear título
    const titulo = crearTitulo(tituloSeccion);
    // añadir el título al div de películas
    creaDivPeliculas.appendChild(titulo);
    // crear div lista de peliculas
    const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas);
    // añadir div lista de plículas al div de peliculas
    creaDivPeliculas.appendChild(divListaPeliculas);
    // crear div contenedor de películas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor
    );
    // añadir div contenedor de Pelicas al div lista de peliculas
    divListaPeliculas.appendChild(divPeliculasContenedor);

    // añadir flechas
    añadirFlecha(divPeliculasContenedor, "izquierda");
    añadirFlecha(divPeliculasContenedor, "derecha");

    // pintar películas
    listaPeliculas.forEach((pelicula) => {
      // crear div película
      const divPelicula = crearContenedor(nombreClases.pelicula);
      // añadir datos a la pelicula
      divPelicula.innerHTML = `
<img src="${pelicula.imagen}" alt="${pelicula.titulo}" />
<h3>${pelicula.titulo}</h3>
`;
      // añadir div pelicula al div contenedor de películas
      divPeliculasContenedor.appendChild(divPelicula);
    });
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
