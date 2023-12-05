import { validarNIF } from "./validanif";

describe("Validación de NIF", () => {
  it.each([
    [12345678, "Z", true],
    [73536276, "D", true],
    [72184153, "X", true],
    [36218255, "V", true],
    [21137848, "C", true],
    [12345678, "A", false],
    [98765432, "A", false],
    [33333333, "C", false],
  ])("NIF: %s%s %s", (numero, letra, resultado) => {
    expect(validarNIF(numero, letra)).toBe(resultado);
  });
});
