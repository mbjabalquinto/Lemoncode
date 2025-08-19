export interface Personaje{
    id: string;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string[];
    amigo: string;
    imagen: string;

};

export const personajeVacio = (): Personaje => ({
    id: "",
    nombre: "",
    apodo: "",
    especialidad: "",
    habilidades: [],
    amigo: "",
    imagen: "",
});