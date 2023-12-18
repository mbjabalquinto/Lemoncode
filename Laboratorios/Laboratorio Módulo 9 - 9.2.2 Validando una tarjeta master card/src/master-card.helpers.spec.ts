import {
  eliminaUltimoCaracter,
  obtenerUltimoCaracter,
  multiplicaPorDosSaltandoUno,
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
