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
        notas: [7, 8, 9],
      },
      {
        alumno: "María López",
        notas: [6, 7, 8],
      },
    ];

    const resultado = calcularNotaMediaAlumnos(fichaAlumnos);
    const notasMedias: Notas[] = [
      {
        alumno: "Juan Pérez",
        notaMedia: 8,
      },
      {
        alumno: "María López",
        notaMedia: 7,
      },
    ];

    expect(resultado).toEqual(notasMedias);
  });
});
