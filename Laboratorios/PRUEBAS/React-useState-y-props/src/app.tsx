// Esta es la clase PADRE. Importa los componentes que hemos creado en otros ficheros, los implementa y 
// devuelve al main lo que tiene que pintar en pantalla.
import React from "react";
import {Saludo} from './saludo'; 
import {EdicionNombre} from './edicion-nombre'


export const App = () => {
  // useState es una función de React que devuelve un valor y una función para actualizar dicho valor.
  // Como sabemos de antemano lo que va a devolver podemos hacer destructuring.
  const [nombre, setNombre] = React.useState("LemonCode");  //useState es un hook de React y necesita un valor inicial. 
                                                            // Le pasamos "Lemoncode".

  return (
    <>
        {/* Con el componente Saludo pintamos en pantalla el nombre de la varible nombre. */}

      <Saludo nombre={nombre} />

        {/* Implementamos el componente EdicionNombre. Como hemos definido un interface tenemos que asignarle
        un string y una función. Le pasamos la función setNombre que es una función para actualizar el estado de un componente
        de React: useState */}

      <EdicionNombre nombreInicial={nombre} onActualizarNombre={setNombre}

      />
    </>
  );
};
