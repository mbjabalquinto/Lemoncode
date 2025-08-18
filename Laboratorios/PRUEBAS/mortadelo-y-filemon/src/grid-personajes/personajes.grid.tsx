import React from "react";
import {Personaje} from "../model";
import {obtenerPersonajesApi} from "./personajes.api";
import {FilasPersonajes} from "./personajes-fila";

export const MostrarPersonajesGrid = () => {
    const [personajes, setPersonajes] = React.useState<Personaje[]>([]);

    React.useEffect(() => {
        obtenerPersonajesApi().then(setPersonajes);
    }, []);

    return (
        <div className="user-list-container">
            <span className="header"> Imagen: </span>
            <span className="header"> Id: </span>
            <span className="header"> Nombre: </span>

        {personajes.map((personaje) => (
            <>
            <FilasPersonajes key={personaje.id} personaje={personaje} />
            </>
        ))}
        
        </div>
    )

};