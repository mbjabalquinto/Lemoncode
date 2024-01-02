import {
  TotalPorTipoIva,
  ResultadoLineaTicket,
  LineaTicket,
  TipoIva,
  productos,
  ResultadoTotalTicket,
  TicketFinal,
} from "./modelo";

export const calculaIva = (precio: number, tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      precio *= 1.21;
      break;

    case "reducido":
      precio *= 1.1;
      break;

    case "superreducidoA":
      precio *= 1.05;
      break;

    case "superreducidoB":
      precio *= 1.04;
      break;

    case "superreducidoC":
      break;

    case "sinIva":
      break;

    default:
      break;
  }

  return Number(precio.toFixed(2));
};

export const calculaLineasTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  const resultadoLineaTicket: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    const { nombre, precio, tipoIva } = lineasTicket[i].producto;
    const cantidad = lineasTicket[i].cantidad;
    const precioConIva = calculaIva(precio, tipoIva);
    resultadoLineaTicket.push({
      nombre: nombre,
      cantidad: cantidad,
      precionSinIva: precio,
      tipoIva: tipoIva,
      precioConIva: precioConIva,
    });
  }
  return resultadoLineaTicket;
};

export const calculaResultadoTotalTicket = (
  resultadoLineaTicket: ResultadoLineaTicket[]
) => {
  const resultadoTotalTicket = resultadoLineaTicket.reduce(
    (acum: ResultadoTotalTicket, linea) => {
      const totalSinIva = linea.precionSinIva * linea.cantidad;
      const totalConIva = linea.precioConIva * linea.cantidad;
      const totalIva =
        (linea.precioConIva - linea.precionSinIva) * linea.cantidad;
      return {
        totalSinIva: acum.totalSinIva + totalSinIva,
        totalConIva: acum.totalConIva + totalConIva,
        totalIva: Number((acum.totalIva + totalIva).toFixed(2)),
      };
    },
    { totalSinIva: 0, totalConIva: 0, totalIva: 0 }
  );
  return resultadoTotalTicket;
};

export const calculaTotalPorTipoIva = (
  resultadoLineaTicket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const totalPorTipoIvaObj = resultadoLineaTicket.reduce(
    (acum: { [key: string]: number }, linea) => {
      const { tipoIva, precioConIva, precionSinIva } = linea;
      const totalIva = (
        (precioConIva - precionSinIva) *
        linea.cantidad
      ).toFixed(2);
      if (!acum[tipoIva]) {
        acum[tipoIva] = 0;
      }
      acum[tipoIva] += Number(totalIva);
      return acum;
    },
    {}
  );

  const totalPorTipoIvaArr: TotalPorTipoIva[] = Object.entries(
    totalPorTipoIvaObj
  ).map(([tipoIva, cuantia]) => ({ tipoIva: tipoIva as TipoIva, cuantia }));

  return totalPorTipoIvaArr;
};

export const calculaTicket = (): TicketFinal => {
  const resultadoLineaTicket = calculaLineasTicket(productos);
  const ticketFinal: TicketFinal = {
    lineas: resultadoLineaTicket,
    total: calculaResultadoTotalTicket(resultadoLineaTicket),
    desgloseIva: calculaTotalPorTipoIva(resultadoLineaTicket),
  };
  return ticketFinal;
};
