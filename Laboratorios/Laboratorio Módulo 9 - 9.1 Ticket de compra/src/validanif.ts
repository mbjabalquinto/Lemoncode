import { obtenerResto, comprobarLetra } from "./motor";

/*
* Valida un NIF
* @param {string} numero, es de tipo string debe tener un tamaño de 8 caracteres
y ser numérico (sin separadores de miles ni nada)
* @param {string} letra, de tipo string debe ser una letra mayúscula
* @returns {boolean}
*/
export function validarNIF(numero: number, letra: string) {
  const resto = obtenerResto(numero);
  const resultado = comprobarLetra(letra, resto);
  return resultado;
}
