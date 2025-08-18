import React from "react";

interface Props {
    nombre: string;
}

export const Saludo: React.FC<Props> = (props) => {
    const { nombre } = props;  // Destructuring para no tener que estar siempre repitiendo props.nombre. Se usan llaves porque es un objeto.
    return <h1> Hola {nombre}</h1>;
};

/*
También se podría hacer así. Este es el método moderno. ReactFC ya no se usa según Gemini Pro.

export const Saludo = ({nombre}: Props) => {   // Aquí hacemos el destructuring directamente en la firma donde recibimos los argumentos.
    return <h1>Hola {nombre}</h1>;
};

Esto es lo mismo otra vez pero menos abreviado:

export const Saludo = (props: Props) => {
    const { nombre} = props;
    return <h1>Hola {nombre}</h1>;
};


*/

/*

El Flujo de Ejecución del Componente Saludo
Entrada: Invocación con props

Un componente padre decide renderizar <Saludo /> y le pasa un "prop" llamado nombre con el valor "Ana".

React Crea el Objeto props 📦

React ve los atributos en el JSX (nombre="Ana") y los empaqueta en un único objeto de JavaScript. Este objeto es props.

En este caso, el objeto props se ve así: { nombre: "Ana" }.

React Llama a tu Función ⚙️

React invoca la función de tu componente, Saludo, pasándole como único argumento el objeto props que acaba de crear.

La llamada es, efectivamente: Saludo({ nombre: "Ana" }).

Desestructuración Dentro del Componente

La primera línea dentro de tu componente se ejecuta: const { nombre } = props;.

Como vimos, esto extrae la propiedad nombre del objeto props y la guarda en una nueva constante local llamada nombre.

Ahora, dentro de tu función, tienes una constante nombre que contiene el valor "Ana".

Generación del Elemento de Salida

Se ejecuta la línea del return: return <h1> Hola {nombre}</h1>;.

React evalúa el JSX. Donde encuentra las llaves {}, inserta el valor de la variable que hay dentro.

La expresión se convierte en: <h1> Hola Ana</h1>.

Este <h1> es un "Elemento de React", una descripción en JavaScript de lo que se debe pintar.

Salida: Renderizado en el DOM 🖥️

React toma este Elemento de React y lo traduce a HTML real en el DOM (Document Object Model) del navegador.

El usuario final ve en su pantalla un encabezado <h1> con el texto "Hola Ana".

En resumen, el componente Saludo es una función que recibe un objeto con datos, extrae la información que necesita y devuelve una descripción de la interfaz que React se encarga de pintar en la web.



*/