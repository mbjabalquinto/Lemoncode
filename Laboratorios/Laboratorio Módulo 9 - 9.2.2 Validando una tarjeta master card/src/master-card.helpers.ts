interface Excepciones {
  CADENA_NO_DEFINIDA: string;
  CADENA_VACIA: string;
}

const excepciones: Excepciones = {
  CADENA_NO_DEFINIDA: "No se ha introducido una cadena",
  CADENA_VACIA: "La cadena está vacía",
};

// ELIMINAMOS EL ULTIMO CARACTER
export const eliminaUltimoCaracter = (cadena: string): string => {
  if (cadena === undefined || cadena === null) {
    throw new Error(excepciones.CADENA_NO_DEFINIDA);
  }
  if (cadena === "") {
    throw new Error(excepciones.CADENA_VACIA);
  }
  return cadena.slice(0, cadena.length - 1);
};

// OBTENEMOS EL ÚLTIMO CARACTER
export const obtenerUltimoCaracter = (cadena: string): number => {
  if (cadena === undefined || cadena === null) {
    throw new Error(excepciones.CADENA_NO_DEFINIDA);
  }
  if (cadena === "") {
    throw new Error(excepciones.CADENA_VACIA);
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
// Multiplicamos por 2 los números del array comenzando por el final y solo uno si, uno no. Es decir los pares comenzando por 0 pero desde el final.
export const multiplicaPorDosSaltandoUno = (cadena: string): number[] => {
  if (cadena === undefined || cadena === null) {
    throw new Error(excepciones.CADENA_NO_DEFINIDA);
  }
  if (cadena === "") {
    throw new Error(excepciones.CADENA_VACIA);
  }
  let numero = cadena.split("").map(Number);
  numero = numero
    .reverse()
    .map((numero, index) => (index % 2 === 0 ? numero * 2 : numero));
  return numero.reverse();
};

// Los números con dígitos dobles (mayores de 9) los sumamos y devolvemos el nuevo array.
//Esta es mi solución la cual es funcional pero menos optimizada.
/*
export const sumaDecenasUnidades = (numeros: number[]): number[] => {
  numeros = numeros.map((numero) => {
    if (numero > 9) {
      let nuevoArray = numero.toString().split("").map(Number);
      let numeroSumado = nuevoArray[0] + nuevoArray[1];
      return numeroSumado;
    } else {
      return numero;
    }
  });
  return numeros;
};

*/
// Esta es la solución del curso. Mejor optimizada que la mía.
const sumaDecenasUnidades = (numero: number): number => {
  if (numero < 10) return numero;
  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  return unidades + decenas;
};

export const sumaDecenasUnidadesColeccion = (numeros: number[]): number[] => {
  if (!numeros) {
    throw new Error("No se ha introducido un número");
  }
  return numeros.map(sumaDecenasUnidades);
};

// SUMAR TODOS LOS DÍGITOS
export const sumaDigitos = (numeros: number[]): number => {
  if (!numeros) {
    throw new Error("No se ha introducido un número");
  }
  const numero = numeros.reduce((accum, numero) => accum + numero, 0);
  return numero;
};

// CALCULAR EL FLAG
export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
  if (!sumaTotal) {
    throw new Error("No se ha introducido un número");
  }
  return 10 - (sumaTotal % 10);
};

/*
Diferencias entre Number() y parseInt()
console.log(Number("5a")); // NaN
console.log(parseInt("5a")); // 5
*/
