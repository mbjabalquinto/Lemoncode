import { TipoIva } from "./modelo";
import { calculaIva } from "./ticket-de-la-compra.helper";

describe("calculaIva", () => {
  it("Debe devolver el importe con el 21% de iva incluido", () => {
    const tipoIva: TipoIva = "general";
    const precio = 10;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(12.1);
  });
  it("Debe devolver el importe con el 10% de iva incluido", () => {
    const tipoIva: TipoIva = "reducido";
    const precio = 20.05;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(22.06);
  });
  it("Debe devolver el importe con el 5% de iva incluido", () => {
    const tipoIva: TipoIva = "superreducidoA";
    const precio = 15;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(15.75);
  });
  it("Debe devolver el importe con el 4% de iva incluido", () => {
    const tipoIva: TipoIva = "superreducidoB";
    const precio = 17;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(17.68);
  });
  it("Debe devolver el importe con el 0% de iva incluido", () => {
    const tipoIva: TipoIva = "superreducidoC";
    const precio = 17;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(17);
  });
  it("Debe devolver el importe con el 0% de iva incluido", () => {
    const tipoIva: TipoIva = "sinIva";
    const precio = 17;
    const resultado = calculaIva(precio, tipoIva);
    expect(resultado).toBe(17);
  });
});
