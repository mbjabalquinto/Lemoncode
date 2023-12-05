import { letras } from "./modelo";

export const obtenerResto = (numero: number): number => {
  return numero % 23;
};

export const comprobarLetra = (letra: string, resto: number): boolean => {
  //return dni[resto].letra === letra ? true : false;
  return letras[resto] === letra ? true : false;
};
