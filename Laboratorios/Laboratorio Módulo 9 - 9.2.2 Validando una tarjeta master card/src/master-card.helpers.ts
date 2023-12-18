export const eliminaUltimoCaracter = (cadena: string): string => {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha introducido una cadena");
  }
  if (cadena === "") {
    throw new Error("La cadena está vacía");
  }
  return cadena.slice(0, cadena.length - 1);
};

export const obtenerUltimoCaracter = (cadena: string): number => {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha introducido una cadena");
  }
  if (cadena === "") {
    throw new Error("La cadena está vacía");
  }
  return Number(cadena.slice(cadena.length - 1));
};

/*
export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  let indice = cadena.length - 1;
  let numeros = cadena.split("").map(Number);
  while (indice > -2) {
    numeros[indice] = numeros[indice] * 2;
    indice -= 2;
  }
  return numeros;
};
*/
export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  if (cadena === undefined || cadena === null) {
    throw new Error("No se ha introducido una cadena");
  }
  if (cadena === "") {
    throw new Error("La cadena está vacía");
  }
  let numero = cadena.split("").map(Number);
  numero = numero
    .reverse()
    .map((numero, index) => (index % 2 === 0 ? numero * 2 : numero));
  return numero.reverse();
};

/*

Diferencias entre Number() y parseInt()
console.log(Number("5a")); // NaN
console.log(parseInt("5a")); // 5

*/
