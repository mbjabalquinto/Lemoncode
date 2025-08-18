import {Personaje} from "../model"

export const GetCharacters = (): Promise<Personaje[]> => // Esta función devuelve una promesa que, cuando se resuelva, entregará un array de objetos Personajes.
    fetch(`http://localhost:3000/personajes`)
        .then((response) => response.json());
    

