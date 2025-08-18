import React from "react";
import { Miembro } from "../modelo";
import { Link } from "react-router-dom"

interface Props{
    miembro: Miembro;
}

export const MiembroFila: React.FC<Props> = (props) => {
    const { miembro } = props;
    return(
        <>
            <img src={miembro.avatar_url} />
            <Link to={`/detalle/${miembro.id}`}>{miembro.id}</Link>
            <span> {miembro.login}</span>
        </>
    )

}