import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, { titulo: "Todas las películas" });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de aventuras",
    filtro: { genero: "Aventuras", caracteristicas: "genero" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas Familiares",
    filtro: { genero: "Familiar", caracteristicas: "genero" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas Animación",
    filtro: { genero: "Animacion", caracteristicas: "genero" },
  });
});
