import { peliculas } from "./datos";
import { pintarPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarPeliculas("Todas las peliculas", peliculas);
});
