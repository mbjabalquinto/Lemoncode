import React from 'react';
import { useParams } from "react-router-dom";
import { getMiembroById } from "../miembro.api";
import { Miembro, crearMiembroVacio } from "./modelo";


export const MiembroDetalle: React.FC = () => {
    const { id } = useParams<{id: string}>();   // Hacemos destructuring para obtener la id y tipamos el objeto que nos devuelve useParams.
   
    const [miembro, setMiembro] = React.useState<Miembro>(crearMiembroVacio());

    React.useEffect(() => {
        if (id) {
            getMiembroById(id).then(setMiembro);
        }
    }, []);


    return (
        
        <div className="contenedor-detalle">
            <h2>Detalle de miembro: {miembro.login}</h2>
            <img className = "contenedor-detalle-img" src={miembro.avatar_url} alt={miembro.login} />
            <p>{`User: ${miembro.login}`}</p>
            <p>{`Blog: ${miembro.blog}`}</p>
        </div>
        
    );
};

