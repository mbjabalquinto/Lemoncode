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

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas premiadas/galardonadas",
    filtro: { caracteristicas: "premioGalardon" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas mas vistas",
    filtro: { caracteristicas: "masVisto" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Peliculas mejor calificadas",
    filtro: { caracteristicas: "calificacionImdb" },
  });
});
