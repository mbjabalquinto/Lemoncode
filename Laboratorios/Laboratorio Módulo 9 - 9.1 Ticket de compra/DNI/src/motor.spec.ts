import { obtenerResto, comprobarLetra } from "./motor";
describe("obtenerResto", () => {
  it.each([
    [12345678, 14],
    [73536276, 9],
    [72184153, 10],
    [36218255, 17],
    [21137848, 20],
    [98765432, 5],
    [33333333, 8],
  ])("NIF: %s %s", (numero, resultado) => {
    expect(obtenerResto(numero)).toBe(resultado);
  });
});
describe("comprobarLetra", () => {
  it.each([
    [0, "T"],
    [1, "R"],
    [2, "W"],
    [3, "A"],
    [4, "G"],
    [5, "M"],
    [6, "Y"],
    [7, "F"],
    [8, "P"],
    [9, "D"],
    [10, "X"],
    [11, "B"],
    [12, "N"],
    [13, "J"],
    [14, "Z"],
    [15, "S"],
    [16, "Q"],
    [17, "V"],
    [18, "H"],
    [19, "L"],
    [20, "C"],
    [21, "K"],
    [22, "E"],
  ])("Indice: %s %s", (indice, resultado) => {
    expect(comprobarLetra(resultado, indice)).toBe(true);
  });
});
