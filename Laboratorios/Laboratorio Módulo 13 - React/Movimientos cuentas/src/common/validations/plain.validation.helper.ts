import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model"; 

export const buildValidationFailedResult = (errorMessage: string): FieldValidationResult => ({ 
  succeeded: false, 
  errorMessage, 
}); 

export const buildValidationSucceededResult = (): FieldValidationResult => ({ 
  succeeded: true, 
  errorMessage: undefined,
}); 

export const buildRequiredFieldValidationFailedResponse = () => 
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE); 