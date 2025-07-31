import "./style.css";
import { calculaNombreBanco, ibanEsValido, ibanBienFormado, extraeCodigoSucursal, extraeDigitoControl, extraeNumeroCuenta } from "./ibanValidator";


document.addEventListener("DOMContentLoaded", () => {
  const ibanInput = document.getElementById("ibanInput") as HTMLInputElement;
  const validateButton = document.getElementById("validateButton") as HTMLButtonElement;
  const formatoIban = document.getElementById("formatoIban") as HTMLParagraphElement;
  const ibanValido = document.getElementById("ibanValido") as HTMLParagraphElement;
  const banco = document.getElementById("banco") as HTMLParagraphElement;
  const sucursal = document.getElementById("sucursal") as HTMLParagraphElement;
  const digitoControl = document.getElementById("digitoControl") as HTMLParagraphElement;
  const cuenta = document.getElementById("cuenta") as HTMLParagraphElement;


  validateButton.addEventListener("click", () => {
    let iban = ibanInput.value.trim();
    iban = iban.replace(/[\s-]/g, '').toUpperCase(); // Elimina espacios y guiones, y convierte a mayúsculas

    // --- VALIDACIÓN CAMPO VACÍO ---
    if (iban === "") {
        formatoIban.textContent = "Por favor, introduzca un IBAN.";
        formatoIban.style.color = "orange"; // O el color que prefieras para avisos
        return; // Detiene la ejecución para no validar un campo vacío
    }
    // --- FIN DE LA VALIDACIÓN ---
 
    if (ibanBienFormado(iban)) {
        formatoIban.textContent = "El IBAN está bien formado.";
        formatoIban.style.color = "green";
    } else {
        formatoIban.textContent = "El IBAN NO está bien formado.";
        formatoIban.style.color = "red";
        return; // Detiene la ejecución si el IBAN no está bien formado
    }

    if (ibanEsValido(iban)) {
      ibanValido.textContent = "El IBAN es válido.";
      ibanValido.style.color = "green";
    } else {
      ibanValido.textContent = "El IBAN no es válido.";
      ibanValido.style.color = "red";
      return; // Detiene la ejecución si el IBAN no es válido
    }

    const nombreBanco = calculaNombreBanco(iban);
    if (nombreBanco){
      banco.textContent = `Banco: ${nombreBanco}`;
      banco.style.color = "blue";
    }
    
    const codigoSucursal = extraeCodigoSucursal(iban);
    if (codigoSucursal) {
      sucursal.textContent = `Sucursal: ${codigoSucursal}`;
      sucursal.style.color = "blue";
    }

    const digControl = extraeDigitoControl(iban);
    if (digControl) {
      digitoControl.textContent = `Dígito de control: ${digControl}`;
      digitoControl.style.color = "blue";
    }

    const numeroCuenta = extraeNumeroCuenta(iban);
    if (numeroCuenta) {
      cuenta.textContent = `Número de cuenta: ${numeroCuenta}`;
      cuenta.style.color = "blue";
    } 

  });
});
