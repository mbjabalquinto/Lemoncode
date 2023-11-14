import { Reserva, reservas, reservaClienteFrecuente } from "./te_toca";

describe("reservaClienteFrecuente", () => {
  it("Debería devolver la primera reserva de tipo standard", () => {
    // Arrange
    const resultadoEsperado: Reserva = {
      id: 23453,
      precio: 250,
      habitacion: "standard",
      prepago: false,
      completadaConExito: true,
    };

    // Act

    // Assert
    expect(reservaClienteFrecuente).toEqual(resultadoEsperado);
  });
  it("Debería devolver undefined si no hay reservas del tipo standard", () => {
    const otrasReservas: Reserva[] = reservas.filter(
      (reserva): boolean => reserva.habitacion !== "standard"
    );
    const resultado: Reserva | undefined = otrasReservas.find(
      (reserva): boolean => reserva.habitacion === "standard"
    );
    expect(resultado).toBeUndefined();
  });
});
