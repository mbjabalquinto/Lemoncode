import {Miembro} from "./modelo-miembro"

// Esta función devuelve una promesa que se resuelve con un array de miembros. Todos los miembros.
export const obtenerMiembros = (): Promise<Miembro[]> =>  
    fetch(`https://api.github.com/orgs/lemoncode/members`)
          .then((response) => response.json()); // Parseamos el resultado a JSON
          
// Esta función recibe un id y devuelve una promesa que se resuelve con un miembro.
export const getMiembroById = (id: string): Promise<Miembro> => {  
    return fetch(`https://api.github.com/user/${id}`).then((response) => 
        response.json()
    );
};
