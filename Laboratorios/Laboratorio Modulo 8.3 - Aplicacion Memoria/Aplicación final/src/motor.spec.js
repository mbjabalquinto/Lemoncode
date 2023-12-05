import { barajarCartas, sePuedeVoltearLaCarta, actualizaIndices, sonPareja, esPartidaCompleta, actualizaEstadoPartida, } from "./motor";
import { cartas, tablero } from "./modelo";
describe("barajarCartas", () => {
    it("barajarCartas no altera el contenido del array", () => {
        const cartasOriginales = [...cartas];
        barajarCartas();
        const cartasBarajadas = [...cartas];
        expect(cartasOriginales.sort((a, b) => a.idFoto - b.idFoto)).toEqual(cartasBarajadas.sort((a, b) => a.idFoto - b.idFoto));
    });
    it("barajarCartas devuelve resultados distintos al original", () => {
        const resultado1 = [...cartas];
        barajarCartas();
        const resultado2 = [...cartas];
        expect(resultado1).not.toEqual(resultado2);
    });
});
describe("sePuedeVoltearLaCarta", () => {
    it("Devuelve FALSE si la carta ya ha sido encontrada", () => {
        tablero.cartas[0].encontrada = true;
        expect(sePuedeVoltearLaCarta(0)).toBe(false);
    });
    it("Devuelve FALSO si la carta ya está vuelta", () => {
        tablero.cartas[0].estaVuelta = true;
        expect(sePuedeVoltearLaCarta(0)).toBe(false);
    });
    it("Devuelve TRUE si no hay cartas levantadas, no está vuelta y no está encontrada.", () => {
        tablero.cartas[0].encontrada = false;
        tablero.cartas[0].estaVuelta = false;
        tablero.estadoPartida = "ceroCartasLevantadas";
        expect(sePuedeVoltearLaCarta(0)).toBe(true);
    });
    it("Devuelve TRUE si solo hay una carta levantada, no está encontrada y no está vuelta.", () => {
        tablero.cartas[0].encontrada = false;
        tablero.cartas[0].estaVuelta = false;
        tablero.estadoPartida = "unaCartaLevantada";
        expect(sePuedeVoltearLaCarta(0)).toBe(true);
    });
});
describe("actualizaIndices", () => {
    it("Si no hay cartas levantadas tiene que actualizar indiceCartaVolteadaA", () => {
        tablero.estadoPartida = "ceroCartasLevantadas";
        actualizaIndices(0);
        expect(tablero.indiceCartaVolteadaA).toEqual(0);
    });
    it("Si solo hay una carta levantada tiene que actualizar indiceCartaVolteadaB", () => {
        tablero.estadoPartida = "unaCartaLevantada";
        actualizaIndices(0);
        expect(tablero.indiceCartaVolteadaB).toEqual(0);
    });
    it("Los índices no se actualizan cuando el estado de la partida es distinto a cero o una carta levantada", () => {
        tablero.estadoPartida = "dosCartasLevantadas";
        const indiceAOriginal = tablero.indiceCartaVolteadaA;
        const indiceBOriginal = tablero.indiceCartaVolteadaB;
        actualizaIndices(0);
        expect(tablero.indiceCartaVolteadaA).toEqual(indiceAOriginal);
        expect(tablero.indiceCartaVolteadaB).toEqual(indiceBOriginal);
    });
});
describe("sonPareja", () => {
    it("Devuelve TRUE si los ids de las fotos son iguales", () => {
        tablero.cartas[0].idFoto = 1;
        tablero.cartas[1].idFoto = 1;
        let resultado = sonPareja(0, 1);
        expect(resultado).toBe(true);
    });
    it("Devuelve FALSE si los ids de las fotos no son iguales.", () => {
        tablero.cartas[0].idFoto = 1;
        tablero.cartas[1].idFoto = 2;
        let resultado = sonPareja(0, 1);
        expect(resultado).toBe(false);
    });
});
describe("esPartidaCompleta", () => {
    it("Tiene que devolver TRUE si todas las cartas están encontradas", () => {
        tablero.cartas = cartas.map((carta) => ({
            ...carta,
            encontrada: true,
        }));
        let resultado = esPartidaCompleta();
        expect(resultado).toBe(true);
    });
    it("Tiene que devolver FALSE si alguna carta no está encontrada", () => {
        tablero.cartas[0].encontrada = false;
        tablero.cartas[1].encontrada = true;
        let resultado = esPartidaCompleta();
        expect(resultado).toBe(false);
    });
});
describe("actualizaEstadoPartida", () => {
    it("Si no hay ninguna carta levantada debe actualizar el estado a una carta levantada", () => {
        tablero.estadoPartida = "ceroCartasLevantadas";
        actualizaEstadoPartida();
        expect(tablero.estadoPartida).toEqual("unaCartaLevantada");
    });
    it("Si solo hay una carta levantada debe actualizar el estado a dos cartas levantadas", () => {
        tablero.estadoPartida = "unaCartaLevantada";
        actualizaEstadoPartida();
        expect(tablero.estadoPartida).toEqual("dosCartasLevantadas");
    });
    it("Si hay dos cartas levantadas debe actualizar el estado a cero cartas levantadas", () => {
        tablero.estadoPartida = "dosCartasLevantadas";
        actualizaEstadoPartida();
        expect(tablero.estadoPartida).toEqual("ceroCartasLevantadas");
    });
});
