export interface FichaAlumno {
  alumno: string;
  notaPracticas: number[];
  notaExamenes: number[];
}

export interface Notas {
  alumno: string;
  notaMediaPracticas: number;
  notaMediaExamenes: number;
}

export const peso = [0.6, 0.4];

// PARÁMETROS DE ENTRADA.
export const fichaAlumnos: FichaAlumno[] = [
  {
    alumno: "Juan Pérez",
    notaPracticas: [7, 8],
    notaExamenes: [7, 8, 9],
  },
  {
    alumno: "María López",
    notaPracticas: [3, 0],
    notaExamenes: [6, 7, 8],
  },
  {
    alumno: "Andrés Ruiz",
    notaPracticas: [8, 9],
    notaExamenes: [9, 9, 10],
  },
  {
    alumno: "Laura Gómez",
    notaPracticas: [10, 10],
    notaExamenes: [8, 7, 6],
  },
  {
    alumno: "Carlos Sánchez",
    notaPracticas: [5, 7],
    notaExamenes: [3, 2, 5],
  },
  {
    alumno: "Ana Martínez",
    notaPracticas: [6, 8],
    notaExamenes: [10, 9, 10],
  },
  {
    alumno: "Sergio Torres",
    notaPracticas: [6, 7],
    notaExamenes: [7, 8, 6],
  },
  {
    alumno: "Isabel Rodríguez",
    notaPracticas: [8, 10],
    notaExamenes: [9, 10, 9],
  },
];
