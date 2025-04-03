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

// Filtrar personajes desde la API
const filtrarPersonajesDesdeAPI = async (nombre) => {
    try {
        const response = await axios.get(`http://localhost:3000/personajes?nombre_like=${nombre}`);
        return response.data;
    } catch (error) {
        console.error("Error al filtrar los personajes:", error);
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
            <p><strong>Nombre:</strong> ${personaje.nombre}</p>
            <p><strong>Especialidad:</strong> ${personaje.especialidad}</p>
            <p><strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>
        `;
        container.appendChild(card);
    });
};

// Manejar el evento de filtrado al pulsar el botón
const manejarFiltrado = async () => {
    const input = document.getElementById("searchInput");
    const filtro = input.value.trim(); // Obtén el texto del input de búsqueda
    if (filtro === "") {
        console.warn("El filtro está vacío. Mostrando todos los personajes.");
        const personajes = await obtenerPersonajes();
        mostrarPersonajes(personajes);
        return;
    }

    const personajesFiltrados = await filtrarPersonajesDesdeAPI(filtro);
    mostrarPersonajes(personajesFiltrados);
};

// Inicializar la carga de personajes y el botón de filtrado
const inicializar = async () => {
    const personajes = await obtenerPersonajes();
    mostrarPersonajes(personajes);

    const botonFiltrar = document.getElementById("filterButton");
    if (!botonFiltrar) {
        console.error("El botón de filtrado no fue encontrado en el DOM.");
        return;
    }

    // Agrega el evento de clic al botón
    botonFiltrar.addEventListener("click", manejarFiltrado);
};

// Llamamos a la función inicial
document.addEventListener("DOMContentLoaded", async () => {
    await inicializar();
});
