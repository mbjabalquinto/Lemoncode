// En este fichero creamos el componente GridMiembros que se encarga de mostrar una lista de miembros.
// El fichero app llamará a este componente para renderizar todos los miembros en pantalla.
import React from "react";
import { Miembro } from "../../modelo-miembro";
import { MiembroFila } from "./miembro-fila";
import {obtenerMiembros} from "../../miembro.api"
import { Layout } from "@/layout";

export const GridMiembros = () =>{
    const [miembros, setMiembros] = React.useState<Miembro[]>([]); // Llamo al hook useState de React para crear un estado que se llama miembros y una función setMiembros para actualizarlo.
      // El estado es un array de objetos del tipo Miembro, que hemos definido en el modelo.ts.
    
      React.useEffect(() => {  // Es una forma de emular el DOMContenLoaded. Al poner corchetes vacios solo se ejecuta la primera vez.
                                // Es un hook de React como useState.

      obtenerMiembros().then(setMiembros).catch((error) => console.log(error));  // Recibimos los datos de la API.
      }, []);

    
    return ( 
      <Layout>
        <div className="user-list-container">
            <span className="header">Avatar</span>
            <span className="header">Id</span>
            <span className="header">Nombre</span>
            {miembros.map((miembro) => (
                <MiembroFila key={miembro.id} miembro={miembro} />
            ))}

        </div>
      </Layout>
  );

};