import { Notas, FichaAlumno } from "./modelo";

export const calcularNotaMedia = (notas: number[]): number => {
  const notaMedia = notas.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );
  return Number((notaMedia / notas.length).toFixed(2));
};

export const calcularNotaMediaAlumnos = (
  fichaAlumnos: FichaAlumno[]
): Notas[] => {
  const notasMedias: Notas[] = fichaAlumnos.map((fichaAlumno) => {
    const notaMedia = calcularNotaMedia(fichaAlumno.notas);
    return {
      alumno: fichaAlumno.alumno,
      notaMedia,
    };
  });
  return notasMedias;
};
