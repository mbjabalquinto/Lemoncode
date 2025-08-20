// Usamos children para crear el diseño de la página.

import * as React from "react";
import logo from "/logo_lemoncode.png";
import { MiContexto } from "@/contexto";

interface Props {
    children: React.ReactNode; // Es un tipo de datos que permite pasar un componente de React como props.
}

export const Layout: React.FC<Props> = (props) => {
    const { children } = props;
    const { nombreUsuario } = React.useContext(MiContexto);

    return (
        <div className="contenedor-layout">
            <header className="layout-header">
                <h1> Lista de miembros de Lemoncode </h1>
                <p> Bienvenido {nombreUsuario} </p>
            </header>
            {children}
            <footer className="layout-footer">
                <img src={logo} alt="Logo Lemoncode" />
            </footer>
        </div>
    );
};