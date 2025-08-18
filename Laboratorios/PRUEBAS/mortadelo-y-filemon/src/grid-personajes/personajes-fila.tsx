import React from "react";
import {Personaje} from "../model";

interface Props{
    personaje: Personaje;
}

export const FilasPersonajes: React.FC<Props> = (props) => { // Las props son unidireccionales. Siempre del padre al hijo.
    const { personaje } = props;  // Usamos llaves porque es un objeto. Para destructurar arrays usamos corchetes.
    return(
        <>
            <img src={`http://localhost:3000/${personaje.imagen}`} />
            <span>{personaje.id}</span>
            <span>{personaje.nombre}</span>
        </>
    )
};
