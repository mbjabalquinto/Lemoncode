export interface Pelicula {
  titulo: string;
  resumen: string;
  genero: string;
  masVisto: boolean;
  calificacionImdb: number;
  premioGalardon: boolean;
  fechaEstreno: Date;
  imagen: string;
}

export interface NombreClases {
  peliculas: string;
  listaPeliculas: string;
  peliculasContenedor: string;
  pelicula: string;
}

export const nombreClases: NombreClases = {
  peliculas: "peliculas",
  listaPeliculas: "lista-peliculas",
  peliculasContenedor: "peliculas-contenedor",
  pelicula: "pelicula",
};
