import {Miembro} from "./modelo"

export const obtenerMiembros = (): Promise<Miembro[]> => 
    fetch(`https://api.github.com/orgs/lemoncode/members`)
          .then((response) => response.json()); // Parseamos el resultado a JSON
          

export const getMiembroById = (id: string): Promise<Miembro> => {
    return fetch(`https://api.github.com/user/${id}`).then((response) => 
        response.json()
    );
};
