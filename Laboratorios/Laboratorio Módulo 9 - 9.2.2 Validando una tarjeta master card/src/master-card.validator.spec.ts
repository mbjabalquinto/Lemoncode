import { esValidaLaTarjetaMasterCard } from "./master-card.validator";

/*
tarjetas validas:
5506927427317625;
5553042241984105;
5555553753048194;
5555555555554444;


tarjetas no validas:
5506927627317626;
5553042241944106;
5525553753048195;
5554555555554445;
*/

describe("validaTarjetaMasterCard", () => {
  it("Debería devolver un throw si la entrada es undefined", () => {
    const numeroTarjeta: any = undefined;
    const resultado = () => esValidaLaTarjetaMasterCard(numeroTarjeta);
    expect(resultado).toThrowError(
      "No se ha introducido un número de tarjeta válido"
    );
  });
  it("Debería devolver un throw si la entrada es nulo", () => {
    const numeroTarjeta: any = null;
    const resultado = () => esValidaLaTarjetaMasterCard(numeroTarjeta);
    expect(resultado).toThrowError(
      "No se ha introducido un número de tarjeta válido"
    );
  });
  it("Debería devolver un throw si la entrada es un string vacío.", () => {
    const numeroTarjeta = "";
    const resultado = () => esValidaLaTarjetaMasterCard(numeroTarjeta);
    expect(resultado).toThrowError(
      "No se ha introducido un número de tarjeta válido"
    );
  });
  it("Debería devolver un throw si la entrada no se puede convertir", () => {
    const numeroTarjeta = "ñalñljdslkjfslkdjf";
    const resultado = () => esValidaLaTarjetaMasterCard(numeroTarjeta);
    expect(resultado).toThrowError(
      "No se ha introducido un número de tarjeta válido"
    );
  });
  it("Debería devolver un throw si la entrada no tiene 16 digitos", () => {
    const numeroTarjeta = "12342134213421342134234";
    const resultado = () => esValidaLaTarjetaMasterCard(numeroTarjeta);
    expect(resultado).toThrowError(
      "No se ha introducido un número de tarjeta válido"
    );
  });
  it.each([
    ["5506927427317625", true],
    ["5553042241984105", true],
    ["5555553753048194", true],
    ["5506927627317626", false],
    ["5553042241944106", false],
    ["5525553753048195", false],
  ])(
    "Si la entrada es %s debería devolver %s",
    (numeroTarjeta: string, valorEsperado: boolean) => {
      const resultado = esValidaLaTarjetaMasterCard(numeroTarjeta);
      expect(resultado).toBe(valorEsperado);
    }
  );
});
