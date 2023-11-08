const reservas = [
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

interface Clientes {
  id: number;
  nombre: string;
  edad: number;
  direccion: string;
}

const clientes: Clientes[] = [
  {
    id: 110,
    nombre: "Manolo",
    edad: 40,
    direccion: "Calle nueva 1",
  },
  {
    id: 120,
    nombre: "Pepe",
    edad: 43,
    direccion: "Calle baja 3",
  },
  {
    id: 130,
    nombre: "Marcos",
    edad: 42,
    direccion: "Calle maeztu 3",
  },
];

// Funcion para borrar elementos de un array de forma inmutable usando un tipado genérico.
const borrarElemento = <T>(coleccionEntrada: T[], indice: number): T[] => [
  ...coleccionEntrada.slice(0, indice),
  ...coleccionEntrada.slice(indice + 1),
];

const insertarElemento = <T>(
  coleccionEntrada: T[],
  elemento: T,
  cabeza: boolean
): T[] =>
  cabeza ? [elemento, ...coleccionEntrada] : [...coleccionEntrada, elemento];

const nuevoElemento = borrarElemento(clientes, 1);
console.log(nuevoElemento);

const nuevoCliente = insertarElemento(
  clientes,
  { id: 140, nombre: "Pedro", edad: 30, direccion: "calle pipo" },
  true
);

console.log(nuevoCliente);
