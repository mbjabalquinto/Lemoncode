import { Personaje } from "../model";

export const obtenerPersonajesApi = (): Promise<Personaje[]> => // ¿Qué vas a devolver? Una promesa. ¿Qué formato tiene? Personaje[]

    fetch(`http://localhost:3000/personajes`)
        .then((response) => response.json())
