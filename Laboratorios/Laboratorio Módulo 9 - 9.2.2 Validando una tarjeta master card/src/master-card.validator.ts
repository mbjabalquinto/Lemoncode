import {
  eliminaUltimoCaracter,
  obtenerUltimoCaracter,
  multiplicaPorDosSaltandoUno,
  sumaDecenasUnidadesColeccion,
  sumaDigitos,
  calculaFlagDeSumaTotal,
} from "./master-card.helpers";

interface TarjetaMasterCard {
  masterCardSinDigitoDeControl: string;
  ultimoDigito: number;
}

const separaDigitoControl = (numeroTarjeta: string): TarjetaMasterCard => ({
  ultimoDigito: obtenerUltimoCaracter(numeroTarjeta),
  masterCardSinDigitoDeControl: eliminaUltimoCaracter(numeroTarjeta),
});

const compruebaSiEsUnNumeroValido = (numeroTarjeta: string) => {
  if (
    !numeroTarjeta ||
    isNaN(Number(numeroTarjeta)) ||
    numeroTarjeta.length !== 16
  ) {
    throw new Error("No se ha introducido un número de tarjeta válido");
  }
};

const calculaFlagDeValidacion = (
  masterCardSinDigitoDeControl: string
): number => {
  let numeroArray = multiplicaPorDosSaltandoUno(masterCardSinDigitoDeControl);
  numeroArray = sumaDecenasUnidadesColeccion(numeroArray);
  const numeroSumado = sumaDigitos(numeroArray);
  return calculaFlagDeSumaTotal(numeroSumado);
};

export const esValidaLaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  compruebaSiEsUnNumeroValido(numeroTarjeta);
  const { masterCardSinDigitoDeControl, ultimoDigito } =
    separaDigitoControl(numeroTarjeta);
  const flagControlCalculado = calculaFlagDeValidacion(
    masterCardSinDigitoDeControl
  );
  return ultimoDigito === flagControlCalculado;
};
