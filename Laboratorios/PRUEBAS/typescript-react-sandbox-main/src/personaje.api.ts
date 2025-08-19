import { Personaje } from "./modelo-personaje";

export const obtenerPersonajes = (): Promise<Personaje[]> => {
    return fetch(`http://localhost:3000/personajes`)
        .then((response) => response.json());
};


export const getPersonajeById = (id: string) => {
    return fetch(`http://localhost:3000/personajes/${id}`)
        .then((response) => response.json());

};