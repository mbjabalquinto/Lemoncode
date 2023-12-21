import {
  buscaBilletesParaElCambio,
  calculaElCambio,
} from "./maquina-de-cambio.helpers";

const importe: number = 2;
const pago: number = 50;

const cambio = calculaElCambio(importe, pago);

const vuelta = buscaBilletesParaElCambio(cambio);

console.log(vuelta);
