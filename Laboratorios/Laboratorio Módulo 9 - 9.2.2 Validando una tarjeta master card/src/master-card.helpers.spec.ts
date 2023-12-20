import {
  eliminaUltimoCaracter,
  obtenerUltimoCaracter,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumaDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

describe("eliminaUltimoDigito", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const cadena: any = undefined;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const cadena: any = null;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es un string vacío", () => {
    const cadena = "";
    const resultado = () => eliminaUltimoCaracter(cadena); // IMPORTANTE***
    expect(resultado).toThrowError("La cadena está vacía");
  });
  it("Debería devolver un string sin el último dígito", () => {
    const cadena1 = "1234567";
    const cadena2 = "123456";
    const resultado = eliminaUltimoCaracter(cadena1);
    expect(resultado).toEqual(cadena2);
  });
});

/*
La diferencia entre const resultado = () => eliminaUltimoCaracter(cadena); y const resultado = eliminaUltimoCaracter(cadena); radica en cuándo se ejecuta la función eliminaUltimoCaracter.
const resultado = () => eliminaUltimoCaracter(cadena);: Aquí, resultado se convierte en una función que, cuando se llama, ejecutará eliminaUltimoCaracter(cadena). 
La función eliminaUltimoCaracter no se ejecuta inmediatamente, sino que se ejecuta solo cuando llamas a resultado().
const resultado = eliminaUltimoCaracter(cadena);: Aquí, resultado es el valor devuelto por la ejecución de eliminaUltimoCaracter(cadena). En este caso, la función eliminaUltimoCaracter se ejecuta inmediatamente.
En el contexto de las pruebas, usamos const resultado = () => eliminaUltimoCaracter(cadena); porque queremos que Jest ejecute la función dentro de su método expect(). Esto permite a Jest capturar y manejar cualquier error que se lance. 
Si usáramos const resultado = eliminaUltimoCaracter(cadena);, cualquier error se lanzaría inmediatamente, lo que haría que la prueba fallara antes de que Jest tuviera la oportunidad de manejar el error. Espero que esto aclare tu duda.

*/

describe("obtenerUltimoCaracter", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const cadena: any = undefined;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const cadena: any = null;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es un string vacío", () => {
    const cadena = "";
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("La cadena está vacía");
  });
  it("Debería devolver el último caracter de la cadena como un número.", () => {
    const cadena1 = "1234567";
    const resultado = obtenerUltimoCaracter(cadena1);
    expect(resultado).toEqual(7);
  });
});

describe("multiplicaPorDosSaltandoUno", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const cadena: any = undefined;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const cadena: any = null;
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("No se ha introducido una cadena");
  });
  it("Debería devolver un throw si la entrada es un string vacío", () => {
    const cadena = "";
    const resultado = () => eliminaUltimoCaracter(cadena);
    expect(resultado).toThrowError("La cadena está vacía");
  });
  it("Debería devolver este array de números: [1, 4, 3, 8, 5, 12]", () => {
    const cadena = "123456";
    const numeros = [1, 4, 3, 8, 5, 12];
    const resultado = multiplicaPorDosSaltandoUno(cadena);
    expect(resultado).toEqual(numeros);
  });
  it("Debería devolver este array de números: [2, 2, 6, 4, 10, 6, 14, 8, 18]", () => {
    const cadena = "123456789";
    const numeros = [2, 2, 6, 4, 10, 6, 14, 8, 18];
    const resultado = multiplicaPorDosSaltandoUno(cadena);
    expect(resultado).toEqual(numeros);
  });
});

describe("sumaDecenasUnidadesColeccion", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const numeros: any = undefined;
    const resultado = () => sumaDecenasUnidadesColeccion(numeros);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const numeros: any = null;
    const resultado = () => sumaDecenasUnidadesColeccion(numeros);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it("Recibe un array de numeros y los digitos dobles debe devolverlos sumados", () => {
    const numeros = [2, 2, 6, 4, 10, 6, 14, 8, 18];
    const resultadoEsperado = [2, 2, 6, 4, 1, 6, 5, 8, 9];
    const resultado = sumaDecenasUnidadesColeccion(numeros);
    expect(resultadoEsperado).toEqual(resultado);
  });
});

describe("sumaDigitos", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const numeros: any = undefined;
    const resultado = () => sumaDigitos(numeros);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const numeros: any = null;
    const resultado = () => sumaDigitos(numeros);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it(`[2, 2, 6, 4, 1, 6, 5, 8, 9] ==> 43
  Tiene que devolver la suma de todos los valores del array`, () => {
    const numeros = [2, 2, 6, 4, 1, 6, 5, 8, 9];
    const resultadoEsperado = 43;
    const resultado = sumaDigitos(numeros);
    expect(resultadoEsperado).toEqual(resultado);
  });
});

describe("calculaFlagDeSumaTotal", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const sumaTotal: any = undefined;
    const resultado = () => calculaFlagDeSumaTotal(sumaTotal);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const sumaTotal: any = null;
    const resultado = () => calculaFlagDeSumaTotal(sumaTotal);
    expect(resultado).toThrowError("No se ha introducido un número");
  });
  it("flag = 10 - (sumaTotal % 10)", () => {
    const sumaTotal = 43;
    const resultadoEsperado = 7;
    const resultado = calculaFlagDeSumaTotal(sumaTotal);
    expect(resultadoEsperado).toEqual(resultado);
  });
});
