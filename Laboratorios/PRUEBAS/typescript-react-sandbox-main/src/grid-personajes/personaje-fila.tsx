import React from "react";
import { Personaje } from "../modelo-personaje"
import { Link } from "react-router-dom";

interface Props {
    personaje: Personaje;
}

export const FilaPersonaje: React.FC<Props> = ({personaje}) => {

    return (
        <>
            <img src={`http://localhost:3000/${personaje.imagen}`} />
            <Link to={`/personajes/detalle/${personaje.id}`}> {personaje.id}</Link>
            <span>{personaje.nombre}</span>
        </>

    );

};