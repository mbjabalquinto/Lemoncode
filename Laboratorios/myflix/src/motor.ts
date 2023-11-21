import { Pelicula, tipoGenero, FiltroPeliculas } from "./modelo";

export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: tipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculasPorPremioGalardon = (
  peliculas: Pelicula[]
): Pelicula[] => peliculas.filter((pelicula) => pelicula.premioGalardon);

export const filtrarPeliculasMasVistas = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.filter((pelicula) => pelicula.masVisto);

export const filtrarPeliculasPorCalificacion = (
  peliculas: Pelicula[]
): Pelicula[] =>
  peliculas.sort(
    (peliculaA, peliculaB) =>
      peliculaB.calificacionImdb - peliculaA.calificacionImdb
  );

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;
  switch (filtro.caracteristicas) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);
    case "premioGalardon":
      return filtrarPeliculasPorPremioGalardon(peliculas);
    case "masVisto":
      return filtrarPeliculasMasVistas(peliculas);
    case "calificacionImdb":
      return filtrarPeliculasPorCalificacion(peliculas);

    default:
      return peliculas;
  }
};
