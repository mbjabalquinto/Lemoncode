import { Notas, FichaAlumno } from "./modelo";

export const calcularNotaMedia = (notas: number[]): number => {
  const notaMedia = notas.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );
  return Number((notaMedia / notas.length).toFixed(2));
};

export const calcularNotaFinal = (
  notaMediaExamenes: number,
  notaMediaPraticas: number
): number => {
  const notaMediaFinal = Number(
    (notaMediaExamenes * 0.4 + notaMediaPraticas * 0.6).toFixed(2)
  );
  return notaMediaFinal;
};

export const calcularNotaMediaAlumnos = (
  fichaAlumnos: FichaAlumno[]
): Notas[] => {
  const notasMedias: Notas[] = fichaAlumnos.map((fichaAlumno) => {
    const notaMediaExamenes = calcularNotaMedia(fichaAlumno.notaExamenes);
    const notaMediaPracticas = calcularNotaMedia(fichaAlumno.notaPracticas);
    const notaMediaFinal = calcularNotaFinal(
      notaMediaExamenes,
      notaMediaPracticas
    );
    return {
      alumno: fichaAlumno.alumno,
      notaMediaPracticas,
      notaMediaExamenes,
      notaMediaFinal,
    };
  });
  return notasMedias;
};

// TODO: YO LO HE CALCULADO TODO EN LA FUNCIÓN calcularNotaMediaAlumnos PERO ELLOS HAN CREADO UNA FUNCIÓN PARA CALULAR LOS PESOS
// LLAMADA calcularNotaFinal Y AL FINAL SIMPLEMENTE LA REFACTORIZAN PARA QUE USE UN ARRAY CON LOS PESOS EN LUGAR DE PONERLOS DIRECTAMENTE.
// TENGO QUE REFACTORIZAR LO MÍO Y CREAR LA FUNCIÓN PARA CALCULAR LOS PESOS EN LUGAR DE HACERLO TODO EN LA MISMA FUNCION.
