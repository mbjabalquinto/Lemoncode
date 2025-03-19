import axios from "axios";

interface Personaje {
    id: number;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string[];
    amigo: string;
    imagen: string;
}

// Obtener personajes desde el servidor
const obtenerPersonajes = async (): Promise<Personaje[]> => {
    try {
        const response = await axios.get<Personaje[]>('http://localhost:3000/personajes');
        return response.data;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};

// Mostrar los personajes en el contenedor HTML
const mostrarPersonajes = (personajes: Personaje[]): void => {
    const container = document.getElementById("characterContainer") as HTMLElement;
    container.innerHTML = "";

    personajes.forEach((personaje) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h3>Nombre: ${personaje.nombre}</h3>
            <p>Especialidad: ${personaje.especialidad}</p>
            <p>Habilidades: ${personaje.habilidades.join(", ")}</p>
        `;
        container.appendChild(card);
    });
};

// Filtrar personajes según el input de búsqueda
const filtrarPersonajes = (personajes: Personaje[]): void => {
    const input = document.getElementById("searchInput") as HTMLInputElement;

    input.addEventListener("input", () => {
        const filtro = input.value.toLowerCase();
        const personajesFiltrados = personajes.filter((p) =>
            p.nombre.toLowerCase().includes(filtro) ||
            p.especialidad.toLowerCase().includes(filtro) ||
            p.habilidades.some((habilidad) => habilidad.toLowerCase().includes(filtro))
        );
        mostrarPersonajes(personajesFiltrados);
    });
};

// Inicializar la carga y filtrado de personajes
const inicializar = async (): Promise<void> => {
    const personajes = await obtenerPersonajes();
    mostrarPersonajes(personajes);
    filtrarPersonajes(personajes);
};

// Llamamos a la función inicial

document.addEventListener("DOMContentLoaded", async () => {
    await inicializar();
});
