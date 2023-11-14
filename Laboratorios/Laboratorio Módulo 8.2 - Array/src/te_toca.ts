export interface Reserva {
  id: number;
  precio: number;
  habitacion: string;
  prepago: boolean;
  completadaConExito: boolean;
}

export const reservas: Reserva[] = [
  {
    id: 23453,
    precio: 250,
    habitacion: "standard",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 56456,
    precio: 150,
    habitacion: "superior",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 43243,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: false,
  },
  {
    id: 23223,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: true,
  },
  {
    id: 89232,
    precio: 650,
    habitacion: "superior",
    prepago: true,
    completadaConExito: false,
  },
];

// Comrpueba todas una a una. Si todas son true devuelve true. Si encuentra algún false deja de comprobar y devuelve false.
// Every
const estanTodasCompletadasConExito: boolean = reservas.every(
  (reserva: Reserva): boolean => reserva.completadaConExito
);
console.log(estanTodasCompletadasConExito);

// Filter
const reservasNoHanTenidoExito: Reserva[] = reservas.filter(
  (reserva: Reserva): boolean => !reserva.completadaConExito
);
console.log(reservasNoHanTenidoExito);

// Find
export const reservaClienteFrecuente: Reserva | undefined = reservas.find(
  (reserva: Reserva): boolean => reserva.habitacion === "standard"
);

console.log(reservaClienteFrecuente);
//actualizaReserva.habitacion = "superior";
//console.log(actualizaReserva);

// FindIndex
const indiceReserva: number = reservas.findIndex(
  (reserva: Reserva): boolean => reserva.habitacion === "standard"
);
console.log(indiceReserva);

// ToSorted
/*const reservasOrdenadasPorPrecio: Reserva[] = reservas.toSorted(
  (reservaA: Reserva, reservaB: Reserva): number =>
    reservaA.precio - reservaB.precio
);
console.log(reservasOrdenadasPorPrecio); */

// Map
const reservasConDescuento: Reserva[] = reservas.map(
  (reserva: Reserva): Reserva => ({
    ...reserva,
    precio: reserva.precio * 0.9,
  })
);

console.log(reservasConDescuento);
//console.log(reservas);

const precioTotal: number = reservas.reduce(
  (acum: number, reserva: Reserva): number => acum + reserva.precio,
  0
);
console.log(precioTotal);

const haySuperior: boolean = reservas.some(
  (reserva: Reserva): boolean => reserva.habitacion === "superior"
);
console.log(haySuperior);

reservas.forEach((reserva: Reserva): void => console.log(reserva.id));
