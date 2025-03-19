//import "./clave-fuerte";
import { validarClave } from "./clave-fuerte";
import { commonPasswords, nombreUsuario, clave } from "./modelo";

console.log(validarClave(nombreUsuario, clave, commonPasswords));
