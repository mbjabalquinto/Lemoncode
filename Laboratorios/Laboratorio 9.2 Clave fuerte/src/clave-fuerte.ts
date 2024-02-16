import { ValidacionClave, commonPasswords } from "./modelo";

// Debe tener mayúsculas y minúsculas
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const validacionClave: ValidacionClave = { esValida: false };
  // si clave original es distinto a clave convertido a minúsculas y también distinto a clave convertido a mayúsculas significa que tiene mezca de ambas.
  if (clave !== clave.toLowerCase() && clave !== clave.toUpperCase()) {
    validacionClave.esValida = true;
  } else {
    validacionClave.esValida = false;
    validacionClave.error = "La clave debe tener mayúsculas y minúsculas";
  }
  return validacionClave;
};

// Debe tener números
export const tieneNumeros = (clave: string): ValidacionClave => {
  const validacionClave: ValidacionClave = { esValida: false };
  // Esto sería más fácil con expresiones regulares pero aún no he llegado a eso.
  for (let i = 0; i < clave.length; i++) {
    if (clave[i] >= "0" && clave[i] <= "9") {
      validacionClave.esValida = true;
      break;
    }
  }
  if (validacionClave.esValida === false) {
    validacionClave.error = "La clave debe tener números";
  }
  return validacionClave;
};

// Debe contener caracteres especiales
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  // ...
};

// Debe tener longitud mínima 8 caracteres
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  // ...
};

// No debe contener el nombre del usuario
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  // ...
};

// No debe contener palabras comunes
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
};

// Debe devolver un objeto con 2 propiedades
export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
};
