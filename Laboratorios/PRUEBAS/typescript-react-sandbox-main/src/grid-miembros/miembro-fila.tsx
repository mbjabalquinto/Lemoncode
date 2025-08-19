import React from "react";
import { Miembro } from "../modelo-miembro";
import { Link } from "react-router-dom";

interface Props{
    miembro: Miembro;
}

export const MiembroFila: React.FC<Props> = (props) => {
    const { miembro } = props;
    return(
        <>
            <img src={miembro.avatar_url} />
            <Link to={`/personas/detalle/${miembro.id}`}> {miembro.id} </Link>
            <span> {miembro.login}</span>
        </>
    )

}

// Link es parecido a <a> pero es un componente de react-router-dom que nos permite navegar entre rutas sin recargar la página.
// Al hacer clic en el Link, se cambiará la URL a /detalle/{miembro.id} y se renderizará el componente MiembroDetalle,
// que mostrará los detalles del miembro cuyo ID se pasa en la URL.
// Lo que el usuario verá como enlace clicable es el ID del miembro.