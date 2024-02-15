import { ValidacionClave, commonPasswords } from "./modelo";

// Debe tener mayúsculas y minúsculas
const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    // ...
  };

// Debe tener números
const tieneNumeros = (clave: string): ValidacionClave => {
  // ...
};

// Debe contener caracteres especiales
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  // ...
};

// Debe tener longitud mínima 8 caracteres
const tieneLongitudMinima = (clave: string): ValidacionClave => {
  // ...
};

// No debe contener el nombre del usuario
const tieneNombreUsuario = (
  nombreUsuario: string
  clave: string,
): ValidacionClave => {
 // ...
};

// No debe contener palabras comunes
const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
};

// Debe devolver un objeto con 2 propiedades
const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    // ...
  };