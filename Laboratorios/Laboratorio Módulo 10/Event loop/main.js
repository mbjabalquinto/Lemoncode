import Axios from "axios";

const leePeliculas = async () => {
    const peliculas = await Axios.get("http://localhost:3000/movies");
    return peliculas.data;
};

const leeActores = async () => { 
    const actores = await Axios.get("http://localhost:3000/actors");
    return actores.data;
};

leePeliculas().then(peliculas => console.log(peliculas));
leeActores().then(actores => console.log(actores));