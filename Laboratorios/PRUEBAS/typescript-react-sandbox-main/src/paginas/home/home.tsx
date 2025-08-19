import { Link } from "react-router-dom";
//import { rutas } from "../../constantes";
import { rutas } from "@/constantes";   // quitamos el harcodeo y usamos alias. Hay que modificar tsconfig.json y vite.config.ts

export const Home = () => {

    return (
        <>
            <Link to={rutas.PERSONAJES}> <h1> Personajes</h1> </Link>
            <Link to={rutas.PERSONAS}><h1> Personas</h1> </Link>
        </>
    );

};