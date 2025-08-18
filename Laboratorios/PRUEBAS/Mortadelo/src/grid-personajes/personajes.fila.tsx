import {Personaje} from "../model"

interface Props {
    personaje: Personaje; 
}

export const GetRows = ({personaje}: Props) => {    // Hago destructuring de Props para obtener el personaje directamente.
    return(
        <>
            <img src={`http://localhost:3000/${personaje.imagen}`} />
            <span>{personaje.id}</span>
            <span>{personaje.nombre}</span>
            <span>{personaje.especialidad}</span>
        
        </>
    );
};