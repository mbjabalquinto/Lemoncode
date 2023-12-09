import { letras } from "./modelo";

export const obtenerResto = (numero: number): number => {
  if (numero.toString().length !== 8) {
    throw new Error("El número debe tener 8 dígitos");
  }
  return numero % 23;
};

export const comprobarLetra = (letra: string, resto: number): boolean => {
  if (letra.length !== 1 || letra !== letra.toUpperCase()) {
    throw new Error("Debe ser solo una letra y debe ser mayúscula");
  }

  //return dni[resto].letra === letra ? true : false;
  return letras[resto] === letra ? true : false;
};
