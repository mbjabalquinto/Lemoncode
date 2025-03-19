import axios from "axios";

// Obtener personajes desde el servidor
const obtenerPersonajes = async () => {
    try {
        const response = await axios.get('http://localhost:3000/personajes');
        return response.data;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};

// Mostrar los personajes en el contenedor HTML
const mostrarPersonajes = (personajes) => {
    const container = document.getElementById("characterContainer");
    if (!container) {
        console.error("El contenedor de personajes no fue encontrado en el DOM.");
        return;
    }

    container.innerHTML = "";

    personajes.forEach((personaje) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="http://localhost:3000/${personaje.imagen}" alt="${personaje.nombre}">
            <p> <strong>Nombre:</strong> ${personaje.nombre}</p>
            <p> <strong>Especialidad:</strong> ${personaje.especialidad}</p>
            <p> <strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>
        `;
        container.appendChild(card);
    });
};

// Filtrar personajes según el input de búsqueda
const filtrarPersonajes = (personajes) => {
    const input = document.getElementById("searchInput");

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
const inicializar = async () => {
    const personajes = await obtenerPersonajes();
    mostrarPersonajes(personajes);
    filtrarPersonajes(personajes);
};

// Llamamos a la función inicial
document.addEventListener("DOMContentLoaded", async () => {
    await inicializar();
});