import { ValidacionClave, commonPasswords } from "./modelo";

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

describe("tieneCaracteresEspeciales", () => {
  it("Debe devolver false.", () => {
    const clave: string = "marcos";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    };
    expect(tieneCaracteresEspeciales(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true.", () => {
    const clave: string = "m@rcos";
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(tieneCaracteresEspeciales(clave)).toEqual(resultadoEsperado);
  });
});

describe("tieneLongitudMinima", () => {
  it("Debe devolver false", () => {
    const clave: string = "marcos";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave debe tener una longitud mínima de 8 caracteres",
    };
    expect(tieneLongitudMinima(clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true", () => {
    const clave: string = "marcos1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(tieneLongitudMinima(clave)).toEqual(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {
  it("Debe devolver false", () => {
    const nombreUsuario: string = "marcos";
    const clave: string = "marcos1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(tieneNombreUsuario(nombreUsuario, clave)).toEqual(resultadoEsperado);
  });
  it("Debe devolver true", () => {
    const nombreUsuario: string = "marcos";
    const clave: string = "admin1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(tieneNombreUsuario(nombreUsuario, clave)).toEqual(resultadoEsperado);
  });
});

describe("tienePalabrasComunes", () => {
  it("Debe devolver true", () => {
    const clave: string = "marcos1234";
    const resultadoEsperado: ValidacionClave = {
      esValida: true,
    };
    expect(tienePalabrasComunes(clave, commonPasswords)).toEqual(
      resultadoEsperado
    );
  });
  it("Debe devolver false", () => {
    const clave: string = "admin";
    const resultadoEsperado: ValidacionClave = {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
    expect(tienePalabrasComunes(clave, commonPasswords)).toEqual(
      resultadoEsperado
    );
  });
});
