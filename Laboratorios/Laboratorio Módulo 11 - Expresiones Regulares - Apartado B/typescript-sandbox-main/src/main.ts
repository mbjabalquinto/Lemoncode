import "./style.css";
import { extractImagesFromHTML, insertImagesIntoHTML } from "./extractor";

document.addEventListener("DOMContentLoaded", () => {
    const htmlInput = document.getElementById("htmlInput") as HTMLInputElement;
    const processButton = document.getElementById("processButton") as HTMLButtonElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;
    
    processButton.addEventListener("click", () => {
        const htmlContent = htmlInput.value.trim();
        // Comprobamos que el campo no esté vacío.
        if (htmlContent === "") {
            resultElement.textContent = "Por favor, ingrese contenido HTML.";
            resultElement.style.color = "orange";
            return; // detenemos la ejecución si el campo está vacío.
        }
        else {
            // Llamamos a la función para extraer imágenes.
            const images = extractImagesFromHTML(htmlContent);
            if (images.length === 0) {
                resultElement.textContent = "No se encontraron imágenes.";
                resultElement.style.color = "red";
            } else {
                insertImagesIntoHTML(images);
            }
        }
       
    });

});
