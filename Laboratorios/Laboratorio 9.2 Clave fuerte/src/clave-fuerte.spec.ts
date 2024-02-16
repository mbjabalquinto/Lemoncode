import { ValidacionClave } from "./modelo";

import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave-fuerte";

describe("tieneMayusculasYMinusculas", () => {
  it("Debe devolver true como valor de la clave esValida.", () => {
    const clave: string = "Marcos1234";
    const resultadoEsperado: ValidacionClave = { esValida: true };
    expect(tieneMayusculasYMinusculas(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver false como valor de la clave esValida.", () => {
    const clave: string = "marcos1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };
    expect(tieneMayusculasYMinusculas(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver false como valor de la clave esValida.", () => {
    const clave: string = "MARCOS1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };
    expect(tieneMayusculasYMinusculas(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver false como valor de la clave esValida.", () => {
    const clave: string = "";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener mayúsculas y minúsculas",
    };
    expect(tieneMayusculasYMinusculas(clave)).toEqual(resultadoEsperado);
  });
});

describe("tieneNumeros", () => {
  it("Debe devolver true", () => {
    const clave: string = "Marcos1234";
    const resultadoEsperado: ValidacionClave = { esValida: true };
    expect(tieneNumeros(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver false", () => {
    const clave: string = "marcos";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener números",
    };
    expect(tieneNumeros(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true", () => {
    const clave: string = "1234marcos1234";
    const resultadoEsperado: ValidacionClave = { esValida: true };
    expect(tieneNumeros(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true", () => {
    const clave: string = "1234";
    const resultadoEsperado: ValidacionClave = { esValida: true };
    expect(tieneNumeros(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true", () => {
    const clave: string = "";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener números",
    };
    expect(tieneNumeros(clave)).toEqual(resultadoEsperado);
  });
});
