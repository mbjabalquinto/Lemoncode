// Contiene la lógica para validar un IBAN


const ibanBienFormado = (iban: string): boolean => {
    const regex = /^[A-Z]{2}\d{22}$/; // 2 letras seguido de 22 números
    return regex.test(iban);
}

const ibanEsValido = (iban: string): boolean => {
    // IBANTOOLS
    const ibantools = require('ibantools');
    if (ibantools.isValidIBAN(iban)) {
        return true; // El IBAN es válido
     } else {
        return false; // El IBAN no es válido
    }
}

const extraeCodigoSucursal = (iban: string): string => {
    return "";
}

const extraeDigitoControl = (iban: string): string => {
    return "";
}

const extraeNumeroCuenta = (iban: string): string => {
    return "";
}

const calculaNombreBanco = (codigoBanco: string): string => {
    return "";
}


export const validateIBAN = (iban: string): boolean => {
    
    iban = iban.replace(/[\s-]/g, '').toUpperCase(); // Elimina espacios y guiones, y convierte a mayúsculas

    if (!ibanBienFormado(iban)) {
        return false; // El IBAN no está bien formado
    }

    if (!ibanEsValido(iban)) {
        return false; // El IBAN no es válido
    }
        
    return true;
}