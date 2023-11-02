import { datos, cartas } from "./modelo";

// GENERA UN NÚMERO DE CARTA AL AZAR EVITANDO EL 8 Y EL 9 CUANDO SE PULSA EL BOTÓN.
export const generaNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

export const valorCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio <= 7 ? numeroAleatorio : numeroAleatorio + 2;
};

// FUNCION PARA SUMAR LA PUNTUACIÓN CADA VEZ QUE SE PIDE UNA NUEVA CARTA.
export const sumaPuntuacion = (numero: number): void => {
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

// PINTA EL MENSAJE CORRESPONDIENTE SEGÚN LA PUNTUACIÓN.
export const pintaMensajes = (): string => {
  let mensaje: string = "";
  if (datos.puntuacion <= 4) {
    mensaje = "Has sido muy conservador.";
  } else if (datos.puntuacion > 4 && datos.puntuacion < 6) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (datos.puntuacion >= 6 && datos.puntuacion <= 7) {
    mensaje = "Casi casi..";
  } else if (datos.puntuacion === 7.5) {
    mensaje = "Lo has clavado! ¡Enhorabuena!";
  } else if (datos.puntuacion > 7.5) {
    mensaje = "Lo siento pero te has pasado. Has perdido!!";
  }
  return mensaje;
};
