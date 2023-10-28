import { datos, generaNumeroAleatorio, cartas, valorCarta } from "./modelo";

// FUNCION PARA SUMAR LA PUNTUACIÓN CADA VEZ QUE SE PIDE UNA NUEVA CARTA.
export const sumaPuntuacion = (numero: number) => {
  if (numero === 10 || numero === 11 || numero === 12) {
    datos.puntuacion = datos.puntuacion + 0.5;
  } else {
    datos.puntuacion = datos.puntuacion + Number(numero);
  }
};

// ES LLAMADA AL PULSAR EL BOTÓN DAME CARTA. OBTIENE EL VALOR ALEATORIO, OBTIENE LA URL DE LA CARTA, SUMA LA PUNTUACIÓN Y DEVUELVE LA CARTA.
export const obtenerCarta = (): string => {
  const numeroAleatorio: number = generaNumeroAleatorio();
  const valor: number = valorCarta(numeroAleatorio);
  const carta: string = cartas[valor];
  sumaPuntuacion(valor);
  return carta;
};

export const teHasPasado = (): boolean => {
  return datos.puntuacion > 7.5;
};

export const loHasClavado = (): boolean => {
  return datos.puntuacion === 7.5;
};
