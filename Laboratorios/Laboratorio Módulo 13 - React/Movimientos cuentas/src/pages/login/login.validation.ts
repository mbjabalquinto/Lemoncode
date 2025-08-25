import { FormValidationResult } from "@/common/validations";
import { Credentials, CredentialsformErrors } from "./login.vm"; 
import { validateUserField, validatePasswordField } from "./login-field.validation";
 
 
export const validateForm = (credentials: Credentials): FormValidationResult<CredentialsformErrors> => {
    const FieldValidationResults = [
      validateUserField(credentials.user),
      validatePasswordField(credentials.password),

    ];

    return {
      succeeded: FieldValidationResults.every((f) => f.succeeded), 
      errors: { 
        user: FieldValidationResults[0].errorMessage ?? "", 
        password: FieldValidationResults[1].errorMessage ?? "", 
      
    }, 
  }
}; 