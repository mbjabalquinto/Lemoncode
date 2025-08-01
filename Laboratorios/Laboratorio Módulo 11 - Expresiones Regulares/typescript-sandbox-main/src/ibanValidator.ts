// Contiene la lógica para validar IBAN

import * as ibantools from 'ibantools';
import { bancos } from './modelo';


export const ibanBienFormado = (iban: string): boolean => {
    const regex = /^[A-Z]{2}\d{22}$/; // 2 letras seguido de 22 números
    return regex.test(iban);
}

export const ibanEsValido = (iban: string): boolean => {
    return ibantools.isValidIBAN(iban);
}

export const extraeCodigoSucursal = (iban: string): string => {
    const sucursal = iban.slice(8, 12); // Extrae los 4 dígitos de la sucursal
    return sucursal;
}

export const extraeDigitoControl = (iban: string): string => {
    const digitoControl = iban.slice(12, 14); // Extrae los 2 dígitos de control
    return digitoControl;
}

export const extraeNumeroCuenta = (iban: string): string => {
    const cuenta = iban.slice(14); // Extrae el resto del IBAN como número de cuenta
    return cuenta;
}

export const calculaNombreBanco = (iban: string): string => {
    //const banco = iban[4] + iban[5] + iban[6] + iban[7]; // Extrae los 4 dígitos del banco
    const banco = iban.slice(4, 8); // Extrae los 4 dígitos del banco
    const nombreBanco = bancos[banco];
    return nombreBanco || "Banco no encontrado"; // Devuelve un mensaje si el banco no se encuentra
    
}
