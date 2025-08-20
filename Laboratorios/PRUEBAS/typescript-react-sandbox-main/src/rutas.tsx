import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { rutas } from "./constantes"

// Importamos los componentes de las páginas que vamos a utilizar en las rutas
import { GridMiembros, GridPersonajes, Home, MiembroDetalle, PersonajeDetalle, Login } from "./paginas";


export const Rutas: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={rutas.HOME} element={<Login />} />
                <Route path={rutas.OPCIONES} element={<Home />} />
                <Route path={rutas.PERSONAS} element={<GridMiembros/>} />
                <Route path={rutas.DETALLES_PERSONA} element={<MiembroDetalle />} />
                <Route path={rutas.PERSONAJES} element={<GridPersonajes/>} />
                <Route path={rutas.DETALLE_PERSONAJE} element={<PersonajeDetalle/>} />
            </Routes>
        </Router>
    );
};

// Aquí básicamente le estamos diciendo: cuando la ruta del navegador sea esta quiero que muestres este componente.
// Si estamos en la página de inicio ("/") muestra toda la lista de miembros con el componente GridMiembros.
// Si estamos en la página de detalle de un miembro ("/detalle/:id"), muestra el componente MiembroDetalle, que mostrará 
// los detalles del miembro cuyo ID se pasa en la URL.
// El uso de `:id` en la ruta indica que es un parámetro dinámico que se puede capturar y utilizar dentro del componente 
// MiembroDetalle para obtener los datos específicos del miembro seleccionado.
// El componente Router envuelve las rutas y permite que la aplicación maneje la navegación entre ellas

