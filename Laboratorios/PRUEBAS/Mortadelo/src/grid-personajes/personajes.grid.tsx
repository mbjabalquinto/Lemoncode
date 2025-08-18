import React from "react";
import {Personaje} from "../model";
import {GetCharacters} from "./personajes.api"
import {GetRows} from "./personajes.fila"
import {GetHeads} from "./personajes.cabecera"


export const GetGrid = () => {
    const [ personajes, setPersonajes ] = React.useState<Personaje[]>([]); // Tipado con paréntesis angular. Es un tipado de entrada. Le indica a useState que tipo de datos va a recibir.

    React.useEffect(() => {
        
        GetCharacters().then((response) => setPersonajes(response));

    }, []);

     
    return(
        <div className="user-list-container">
           <GetHeads />

        {personajes.map((personaje) => 
            <>
               <GetRows key={personaje.id} personaje={personaje} />
            </>
        )}

        </div>

    )

};

