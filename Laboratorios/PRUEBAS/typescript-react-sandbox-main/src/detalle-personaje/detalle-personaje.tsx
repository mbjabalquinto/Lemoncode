import React from "react";
import { Personaje, personajeVacio } from "./modelo";
import { useParams } from "react-router-dom";
import { getPersonajeById } from "../personaje.api"


export const PersonajeDetalle: React.FC  = () => {
    const { id } = useParams<{id: string}>();   // useParams es un hook con lo cual accede a la url directamente. No necesita recibir ningún parámetro en la llamada. Con destructuring sacamos la id.

    const [personaje, setPersonaje] = React.useState<Personaje>(personajeVacio());

    React.useEffect(() => { 
    if (id) { 
      try { 
        getPersonajeById(id).then(setPersonaje); 
      } catch (error) { 
        throw new Error("Error al cargar el personaje"); 
      } 
    } 
  }, []); 
   
    return (

        <div className="contenedor-detalle">
            <h1>Detalle id {personaje.id}</h1>
            <img className="contenedor-detalle-img" src={`http://localhost:3000/${personaje.imagen}`} />
            <p> {`Nombre: ${personaje.nombre}`}</p>
            <p> {`Apodo: ${personaje.apodo}`}</p>
            <p> {`Especialidad: ${personaje.especialidad}`}</p>
            <p> {`Habilidades: ${personaje.habilidades}`}</p>
            <p> {`Amigo: ${personaje.amigo}`}</p>


        </div>

    );

};