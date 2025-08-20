import React from "react"; 
import { Credencial, CrearCredencialVacia } from "./modelo";
import { iniciarSesion } from "./login.api";
import { MiContexto } from "@/contexto";
import { useNavigate } from "react-router-dom";
import { rutas } from "@/constantes";

export const Login: React.FC = () => { 
    const [ perfilUsuario, setPerfilUsuario ] = React.useState<Credencial> (CrearCredencialVacia());

    const { setNombreUsuario } = React.useContext(MiContexto);

    const navigate = useNavigate();
 
    const autenticar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent.Default se usa para evitar que el navegador haga postback
                                //  (envíe los datos al servidor y refresque el formulario cuando pulsas submit.
        iniciarSesion(perfilUsuario).then((esValido) => {   // Nos devuelve una promesa. Cuando se resuelve comprobamos si el usuario es correcto.
            if (esValido) {
                setNombreUsuario(perfilUsuario.usuario);
                navigate(rutas.OPCIONES);
            } else {
                alert("usuario o contraseña incorrectos");
            }
        });
    };
  
    return ( 
    <div className="contenedor-login"> 
      <h2>Inicio de Sesión</h2> 
      <form onSubmit={autenticar} className="contenedor-formulario"> 
        <label htmlFor="usuario">Usuario: </label> 
        <input 
            id="usuario" 
            placeholder="Usuario" 
            autoComplete="off"
            onChange={(event) => 
                setPerfilUsuario({...perfilUsuario, usuario: event.target.value})
            }
        /> 
        <label htmlFor="password">Contraseña: </label> 
        <input 
            id="password" 
            type="password" 
            autoComplete="off" 
            onChange={(event) => 
                setPerfilUsuario({...perfilUsuario, password: event.target.value})
          }
          placeholder="Contraseña" 
        /> 
        <button type="submit">Iniciar sesión</button> 
      </form> 
    </div> 
  ); 
}; 