import { Notas, FichaAlumno, fichaAlumnos, peso } from "./modelo";

export const calcularNotaMedia = (notas: number[]): number => {
  const notaMedia = notas.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );
  return Number((notaMedia / notas.length).toFixed(2));
};

export const calcularNotaFinal = (
  notasMedias: number[],
  peso: number[]
): number => {
  const notaMediaFinal = notasMedias.reduce(
    (acum, nota, index) => acum + nota * peso[index],
    0
  );
  const notaMediaFinalRedondeada = Number(notaMediaFinal.toFixed(2));
  return notaMediaFinalRedondeada;
};

export const calcularNotaMediaAlumnos = (
  fichaAlumnos: FichaAlumno[]
): Notas[] => {
  const notasMedias: Notas[] = fichaAlumnos.map((fichaAlumno) => {
    const notaMediaExamenes = calcularNotaMedia(fichaAlumno.notaExamenes);
    const notaMediaPracticas = calcularNotaMedia(fichaAlumno.notaPracticas);
    return {
      alumno: fichaAlumno.alumno,
      notaMediaPracticas,
      notaMediaExamenes,
    };
  });
  return notasMedias;
};

const notasMedias: Notas[] = calcularNotaMediaAlumnos(fichaAlumnos);

export const obtenerNotaMediaGlobal = (): number[] => {
  const notasMediasEnArray: number[][] = notasMedias.map(
    ({ alumno, ...resto }) => Object.values(resto)
  );

  const notaMediaFinal = notasMediasEnArray.map((notaMedia) => {
    const nota: number = calcularNotaFinal(notaMedia, peso);
    return nota;
  });
  console.log(notaMediaFinal);
  return notaMediaFinal;
};
