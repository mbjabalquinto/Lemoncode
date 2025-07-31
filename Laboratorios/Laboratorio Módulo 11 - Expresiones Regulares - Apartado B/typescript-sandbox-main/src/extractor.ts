
// Recibimos el HTML y extraemos las imágenes.
export const extractImagesFromHTML = (html: string): string[] => {  // recibo un strring y devuelvo un array de strings.
    // Utilizamos una expresión regular para encontrar todas las etiquetas <img> y extraer sus atributos src.
    const regex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
    const images: string[] = [];
    const matches = html.matchAll(regex);   // matchAll devuelve un iterable de todas las coincidencias de la expresión regular.
    // Iteramos sobre las coincidencias y extraemos el valor del atributo src.
    for (const match of matches) {
        if (match[1]) {     // match[1] contiene el valor del atributo src de la etiqueta <img>. match[0] contiene la etiqueta completa.
            images.push(match[1]);
        }
    }
    return images;
}

export const insertImagesIntoHTML = (images: string[]) => {
    const contenedor = document.getElementById("contenedor");

    if (!contenedor) return; // Si no existe el contenedor, no hacemos nada.

    for (const url of images) { // usamos for .. of para recorrer los valores. El for .. in es para los índices.
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen extraída";
        img.style.width = "150px"; // Ajustamos el tamaño de las imágenes.
        img.style.margin = "10px"; // Añadimos un margen entre las imágenes.
        contenedor.appendChild(img); // Añadimos la imagen al contenedor.
        
    }
}
    
