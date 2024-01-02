const moneda = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

interface Monedero {
  valor: number;
  contador: number;
}

export const compruebaSiEsUnNumeroValido = (numero: number) => {
  if (!numero || isNaN(numero) || numero < 0) {
    throw new Error("No se ha introducido un número válido");
  }
};

export const calculaElCambio = (importe: number, pago: number): number => {
  compruebaSiEsUnNumeroValido(importe);
  compruebaSiEsUnNumeroValido(pago);
  return pago - importe;
};

export const buscaBilletesParaElCambio = (cambio: number): Monedero[] => {
  compruebaSiEsUnNumeroValido(cambio);
  const monedero: Monedero[] = [];
  for (let i = 0; i < moneda.length; i++) {
    // SI DEVUELVE MENOS DE 1 NO LE PUEDO DAR ESE BILLETE/MONEDA POR SER MAS GRANDE EL VALOR QUE EL IMPORTE ASÍ QUE PASAMOS AL SIGUIENTE MAS PEQUEÑO.
    if (cambio / moneda[i] >= 1) {
      monedero.push({
        valor: moneda[i],
        contador: Math.floor(cambio / moneda[i]),
      });
      // ACTUALIZAMOS EL VALOR DE CAMBIO Y LE ASIGNAMOS EL RESTO DE LA DIVISIÓN PORQUE ES LO QUE FALTA POR DEVOLVER.
      cambio = Number((cambio % moneda[i]).toFixed(2));
    }
  }
  return monedero;
};
