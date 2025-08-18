/*import React from "react"; // Importamos la libería React
export const App = () => {
  const [nombre, setNombre] = React.useState("Marcos");  // Usamos desctructuring para guardar el getter y en setter en sus respectivas variables.
                                                          // El setter es una función asíncrona que actualiza el estado del componente.
  const [apellido, setApellido] = React.useState("Jabalquinto"); // Usamos hooks (useState).
  
  return (
    <>
      <h2>Nombre: {nombre}</h2>
      <h2>Apellido: {apellido}</h2>

      
      <input
        value = {nombre}
        onChange = {(event) => {
          setNombre(event.target.value);  // Repintamos cada vez que haya un cambio
        }
        }
      />
      
      <input
        value = {apellido}
        onChange = {(event) => {
          setApellido(event.target.value);
        }
        }
      />
    </>
  );
}; */


// SE PUEDE HACER LO MISMO PERO USANDO UN OBJETO QUE GUARDE NOMBRE Y APELLIDO Y EVITAR TENER DOS ESTADOS

import React from "react";
export const App = () => {
const [usuario, setUsuario] = React.useState({
  nombre: "Marcos",
  apellido: "Jabalquinto",
});
console.log(usuario);
console.log(setUsuario);
return (
  <>
    <h1>Nombre: {usuario.nombre}</h1>
    <h2>Apellido: {usuario.apellido}</h2>
    <input
      value = {usuario.nombre}
      onChange={(event) => {
        setUsuario({
          ...usuario,
          nombre: event.target.value,
        });
      }}
    />
   
    <input
      value = {usuario.apellido}
      onChange = {(event) => {
        setUsuario({
          ...usuario,
          apellido: event.target.value,
        })
      }}
   
    />    
  </>
);
};






