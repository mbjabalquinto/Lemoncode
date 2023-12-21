const moneda = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

interface Monedero {
  valor: number;
  contador: number;
}

export const compruebaSiEsUnNumeroValido = (numero: number) => {
  if (!numero || isNaN(numero)) {
    throw new Error("No se ha introducido un número válido");
  }
};

export const calculaElCambio = (importe: number, pago: number): number => {
  compruebaSiEsUnNumeroValido(importe);
  compruebaSiEsUnNumeroValido(pago);
  const vuelta = pago - importe;
  return vuelta;
};

export const buscaBilletesParaElCambio = (cambio: number): Monedero[] => {
  compruebaSiEsUnNumeroValido(cambio);
  const monedero: Monedero[] = [];
  for (let i = 0; i < moneda.length; i++) {
    if (cambio / moneda[i] >= 1) {
      monedero.push({
        valor: moneda[i],
        contador: Math.floor(cambio / moneda[i]),
      });
      cambio = Number((cambio % moneda[i]).toFixed(2));
    }
  }
  return monedero;
};
