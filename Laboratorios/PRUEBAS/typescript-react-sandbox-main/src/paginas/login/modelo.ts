export interface Credencial{
    usuario: string;
    password: string;
}

export const CrearCredencialVacia = (): Credencial => ({    // Vamos a retornar un objeto {} por eso en este caso usamos paréntesis.
    usuario: "",
    password: "",

});