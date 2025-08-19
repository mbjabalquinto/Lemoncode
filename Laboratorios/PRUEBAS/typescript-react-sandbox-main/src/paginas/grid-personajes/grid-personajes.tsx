import React from "react";
import { Personaje } from "../../modelo-personaje";
import { obtenerPersonajes } from "../../personaje.api";
import { FilaPersonaje } from "./personaje-fila"

export const GridPersonajes = () => {
    const [ personajes, getPersonajes ] = React.useState<Personaje[]>([])

    React.useEffect(() => {
        obtenerPersonajes().then(getPersonajes);

    },[]);

    return (
        <div className="user-list-container">
            <span className="header">Avatar</span>
            <span className="header">Id</span>
            <span className="header">Nombre</span>

            {personajes.map((personaje) => (
                <FilaPersonaje key={personaje.id} personaje={personaje} /> 
            ))}
        
        </div>

    )

}