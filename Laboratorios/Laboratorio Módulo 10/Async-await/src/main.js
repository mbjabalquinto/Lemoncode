import Axios from "axios";

const leeActores = async () => {
    const response = await fetch("http://localhost:3000/actors");
    if(!response.ok) {
        throw new Error("Error al leer los actores");
    }

    const data = await response.json();
    return data;

}


const leePeliculas = async () => {
    const response = await fetch("http://localhost:3000/movies");
    if(!response.ok) {
        throw new Error("Error al leer las películas");
    }

    const data = await response.json();
    return data;

}


const resultado = await Promise.all([leeActores(), leePeliculas()]);
console.log(resultado);