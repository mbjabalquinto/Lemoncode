export interface FichaAlumno {
  alumno: string;
  notas: number[];
}

export interface Notas {
  alumno: string;
  notaMedia: number;
}

// PARÁMETROS DE ENTRADA.
export const fichaAlumnos: FichaAlumno[] = [
  {
    alumno: "Juan Pérez",
    notas: [7, 8, 9],
  },
  {
    alumno: "María López",
    notas: [6, 7, 8],
  },
  {
    alumno: "Andrés Ruiz",
    notas: [9, 9, 10],
  },
  {
    alumno: "Laura Gómez",
    notas: [8, 7, 6],
  },
  {
    alumno: "Carlos Sánchez",
    notas: [3, 2, 5],
  },
  {
    alumno: "Ana Martínez",
    notas: [10, 9, 10],
  },
  {
    alumno: "Sergio Torres",
    notas: [7, 8, 6],
  },
  {
    alumno: "Isabel Rodríguez",
    notas: [9, 10, 9],
  },
];
