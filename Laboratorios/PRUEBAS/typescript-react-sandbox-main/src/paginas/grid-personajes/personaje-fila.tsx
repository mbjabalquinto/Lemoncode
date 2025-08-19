import React from "react";
import { Personaje } from "../../modelo-personaje"
import { Link, generatePath } from "react-router-dom";
import { rutas } from "../../constantes";

interface Props {
    personaje: Personaje;
}

export const FilaPersonaje: React.FC<Props> = ({personaje}) => {

    return (
        <>
            <img src={`http://localhost:3000/${personaje.imagen}`} />
            <Link to={generatePath(rutas.DETALLE_PERSONAJE, { id: personaje.id })} > {personaje.id} </Link>
            <span>{personaje.nombre}</span>
        </>

    );

};