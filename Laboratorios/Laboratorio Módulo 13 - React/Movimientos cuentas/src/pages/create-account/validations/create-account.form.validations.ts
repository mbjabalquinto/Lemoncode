import { CreateAccountVm, CreateAccountError } from "../create-account.model";
import { validateTypeField, validateNameField } from "./create-account.field.validations";
import { FormValidationResult } from "@/common/validations";

export const validateForm = (account: CreateAccountVm): FormValidationResult<CreateAccountError> => {
  const typeResult = validateTypeField(account.type);
  const nameResult = validateNameField(account.name);

  return {
    succeeded: typeResult.succeeded && nameResult.succeeded,
    errors: {
      type: typeResult.errorMessage ?? "",
      name: nameResult.errorMessage ?? "",
    },
  };
};