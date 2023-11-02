import {
  generaNumeroAleatorio,
  sumaPuntuacion,
  valorCarta,
  loHasClavado,
  teHasPasado,
} from "./motor";
import { datos } from "./modelo";
import { vi } from "vitest";

describe("generaNumeroAleatorio", () => {
  it("Forzamos a MathRandom a devolver 0 y la función debería devolver 1", () => {
    // Arrange
    const numeroEsperado = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);
    // Act
    const resultado = generaNumeroAleatorio();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Forzamos a MathRandom a devolver 1 y la función debería devolver 10", () => {
    // Arrange
    const numeroEsperado = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.999);
    // Act
    const resultado = generaNumeroAleatorio();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Forzamos a MathRandom a devolver 0.5 y la función debería devolver 6", () => {
    // Arrange
    const numeroEsperado = 6;
    vi.spyOn(global.Math, "random").mockReturnValue(0.5);
    // Act
    const resultado = generaNumeroAleatorio();
    // Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("valorCarta", () => {
  it("Le pasamos un 7 y debería devolver 7", () => {
    // Arrange
    const numeroEsperado: number = 7;
    // Act
    const resultado = valorCarta(7);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Le pasamos un 8 y debería devolver 10", () => {
    // Arrange
    const numeroEsperado: number = 10;
    // Act
    const resultado = valorCarta(8);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Le pasamos un 10 y debería devolver 12", () => {
    // Arrange
    const numeroEsperado: number = 12;
    // Act
    const resultado = valorCarta(10);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("sumaPuntuacion", () => {
  beforeEach(() => {
    datos.puntuacion = 0;
  });
  it("Si el número es 10, 11 o 12 debería sumar 0.5", () => {
    // Arrange
    // Act
    sumaPuntuacion(10);
    // Assert
    expect(datos.puntuacion).toBe(0.5);
    // Act
    sumaPuntuacion(11);
    // Assert
    expect(datos.puntuacion).toBe(1);
    // Act
    sumaPuntuacion(12);
    // Assert
    expect(datos.puntuacion).toBe(1.5);
  });
  it("Si el número es distinto de 10, 11 o 12 debería sumar el número a datos.puntuacion", () => {
    // Arrange
    // Act
    sumaPuntuacion(1);
    // Assert
    expect(datos.puntuacion).toBe(1);
    // Act
    sumaPuntuacion(5);
    // Assert
    expect(datos.puntuacion).toBe(6);
    // Act
    sumaPuntuacion(9);
    // Assert
    expect(datos.puntuacion).toBe(15);
  });
});
describe("loHasClavado", () => {
  it("Si datos.puntuacion vale 7.5 tiene que devolver true.", () => {
    // Arrange
    datos.puntuacion = 7.5;
    // Act
    const resultado = loHasClavado();
    //Assert
    expect(resultado).toBe(true);
  });
  it("Si datos.puntuacion vale cualquier cosa distinta a 7.5 tiene que devolver false.", () => {
    // Arrange
    datos.puntuacion = 5;
    // Act
    const resultado = loHasClavado();
    //Assert
    expect(resultado).toBe(false);
  });
});
describe("teHasPasado", () => {
  it("Si datos.puntuacion vale mas de 7.5 tiene que devolver true.", () => {
    // Arrange
    datos.puntuacion = 8;
    // Act
    const resultado = teHasPasado();
    //Assert
    expect(resultado).toBe(true);
  });
  it("Si datos.puntuacion vale menos de 7.5 tiene que devolver false.", () => {
    // Arrange
    datos.puntuacion = 7;
    // Act
    const resultado = teHasPasado();
    //Assert
    expect(resultado).toBe(false);
  });
});
