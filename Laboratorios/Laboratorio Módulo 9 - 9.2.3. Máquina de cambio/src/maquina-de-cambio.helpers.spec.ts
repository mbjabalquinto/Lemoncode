import {
  calculaElCambio,
  compruebaSiEsUnNumeroValido,
  buscaBilletesParaElCambio,
} from "./maquina-de-cambio.helpers";

describe("compruebaSiEsUnNumeroValido", () => {
  it.each([[undefined], [null], ["no es un número"], [0], [""], [NaN], [-1]])(
    "Debe devolver una excepción si no es un número válido",
    (importe: any) => {
      const resultado = () => compruebaSiEsUnNumeroValido(importe);
      expect(resultado).toThrowError("No se ha introducido un número válido");
    }
  );
});

describe("calculaElCambio", () => {
  it("Debe devolver un número.", () => {
    const importe = 5;
    const pago = 10;
    const resultado = calculaElCambio(importe, pago);
    expect(resultado).toBe(5);
  });
});

describe("buscaBilletesParaElCambio", () => {
  it("Debe devolver un array de objetos con las monedas y los contadores ", () => {
    const cambio = 48;
    const resultadoEsperado = [
      { valor: 20, contador: 2 },
      { valor: 5, contador: 1 },
      { valor: 2, contador: 1 },
      { valor: 1, contador: 1 },
    ];
    const resultado = buscaBilletesParaElCambio(cambio);
    expect(resultadoEsperado).toEqual(resultado);
  });
  it("Debe devolver un array de objetos con las monedas y los contadores ", () => {
    const cambio = 139.99;
    const resultadoEsperado = [
      { valor: 50, contador: 2 },
      { valor: 20, contador: 1 },
      { valor: 10, contador: 1 },
      { valor: 5, contador: 1 },
      { valor: 2, contador: 2 },
      { valor: 0.5, contador: 1 },
      { valor: 0.2, contador: 2 },
      { valor: 0.05, contador: 1 },
      { valor: 0.02, contador: 2 },
    ];
    const resultado = buscaBilletesParaElCambio(cambio);
    expect(resultadoEsperado).toEqual(resultado);
  });
});
