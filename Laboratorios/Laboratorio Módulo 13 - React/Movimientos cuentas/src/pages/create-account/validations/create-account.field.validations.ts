import { isStringValueInformed, buildRequiredFieldValidationFailedResponse, buildValidationSucceededResult } from "@/common/validations";

export const validateTypeField = (value: string) => {
  if (!isStringValueInformed(value)) return buildRequiredFieldValidationFailedResponse();
  return buildValidationSucceededResult();
};

export const validateNameField = (value: string) => {
  if (!isStringValueInformed(value)) return buildRequiredFieldValidationFailedResponse();
  return buildValidationSucceededResult();
};