import { FichaAlumno, Notas } from "./modelo";

import { calcularNotaMedia, calcularNotaMediaAlumnos } from "./motor";

describe("calcularNotaMedia", () => {
  it("recibe 3 números en un array y debe devulver la media", () => {
    const numeros = [5, 5, 5];
    const resultadoEsperado = 5;
    expect(calcularNotaMedia(numeros)).toEqual(resultadoEsperado);
  });
  it("recibe 3 números en un array y devolver la media", () => {
    const numeros = [6, 7, 8];
    const resultadoEsperado = 7;
    expect(calcularNotaMedia(numeros)).toEqual(resultadoEsperado);
  });
  it("recibe 3 números en un array y devolver la media", () => {
    const numeros = [3, 2, 6];
    const resultadoEsperado = 3.67;
    expect(calcularNotaMedia(numeros)).toEqual(resultadoEsperado);
  });
});

describe("calcularNotaMediaAlumnos", () => {
  it("Debería devolver la nota media de todos los alumnos", () => {
    const fichaAlumnos: FichaAlumno[] = [
      {
        alumno: "Juan Pérez",
        notaPracticas: [7, 9],
        notaExamenes: [7, 8, 9],
      },
      {
        alumno: "María López",
        notaPracticas: [4, 6],
        notaExamenes: [6, 7, 8],
      },
    ];

    const resultado = calcularNotaMediaAlumnos(fichaAlumnos);
    const notasMedias: Notas[] = [
      {
        alumno: "Juan Pérez",
        notaMediaPracticas: 8,
        notaMediaExamenes: 6,
      },
      {
        alumno: "María López",
        notaMediaPracticas: 7,
        notaMediaExamenes: 5,
      },
    ];

    expect(resultado).toEqual(notasMedias);
  });
});
