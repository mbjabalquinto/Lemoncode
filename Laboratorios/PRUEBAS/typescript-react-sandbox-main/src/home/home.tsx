import { Link } from "react-router-dom";
export const Home = () => {

    return (
        <>
            <Link to={`/personajes/`}> <h1> Personajes</h1> </Link>
            <Link to={`/personas/`}><h1> Personas</h1> </Link>
        </>
    );

};