import { Pelicula, tipoGenero, FiltroPeliculas } from "./modelo";

export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: tipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;
  switch (filtro.caracteristicas) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);
    default:
      return peliculas;
  }
};
