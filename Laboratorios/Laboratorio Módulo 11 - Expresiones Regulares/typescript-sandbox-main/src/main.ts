import "./style.css";
import { validateIBAN } from "./ibanValidator";


document.addEventListener("DOMContentLoaded", () => {
  const ibanInput = document.getElementById("ibanInput") as HTMLInputElement;
  const validateButton = document.getElementById("validateButton") as HTMLButtonElement;
  const result = document.getElementById("result") as HTMLParagraphElement;

  validateButton.addEventListener("click", () => {
    const iban = ibanInput.value.trim();

    // --- VALIDACIÓN CAMPO VACÍO ---
    if (iban === "") {
        result.textContent = "Por favor, introduzca un IBAN.";
        result.style.color = "orange"; // O el color que prefieras para avisos
        return; // Detiene la ejecución para no validar un campo vacío
    }
    // --- FIN DE LA VALIDACIÓN ---

    if (validateIBAN(iban)) {
      result.textContent = "El IBAN es válido.";
      result.style.color = "green";
    } else {
      result.textContent = "El IBAN no es válido.";
      result.style.color = "red";
    }
  });
});
