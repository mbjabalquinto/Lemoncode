import { CreateAccountVm, CreateAccountError } from "./create-account.model";

export const validateForm = (account: CreateAccountVm) => {
  const errors: CreateAccountError = { type: "", name: "" };
  let succeeded = true;

  if (!account.type) {
    errors.type = "Debes seleccionar un tipo de cuenta";
    succeeded = false;
  }

  if (!account.name || account.name.trim().length < 3) {
    errors.name = "El alias debe tener al menos 3 caracteres";
    succeeded = false;
  }

  return { succeeded, errors };
};