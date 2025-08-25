import { isStringValueInformed, isValidIban, isPositiveNumber, 
isValueNotNullOrUndefined, isEMailWellFormed, isDateAfterToday, 
buildRequiredFieldValidationFailedResponse,
buildValidationSucceededResult,
buildValidationFailedResult} from "@/common/validations";
import {
   FieldValidationResult,
   INVALID_AMOUNT_MESSAGE,
   INVALID_EMAIL_MESSAGE,
   INVALID_IBAN_MESSAGE,
   INVALID_REAL_DATE_TRANSFER_MESSAGE,
  } from "@/common/validations";


export const validateAccountIdField = ( 
  value: string 
): FieldValidationResult => { 
  if (!isStringValueInformed(value)) { 
    return buildRequiredFieldValidationFailedResponse(); 
  } 
  return buildValidationSucceededResult(); 
}; 

export const validateIBANField = (value: string): FieldValidationResult => { 
    if (!isStringValueInformed(value)) { 
        return buildRequiredFieldValidationFailedResponse(); 
    } 

    if (!isValidIban(value)) { 
        return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
    } 

    return buildValidationSucceededResult(); 
};

export const validateNameField = (value: string): FieldValidationResult => { 
    if (!isStringValueInformed(value)) { 
        return buildRequiredFieldValidationFailedResponse(); 
    } 
    return buildValidationSucceededResult(); 
 };

export const validateAmountField = (value: number): FieldValidationResult => { 
    if (!isPositiveNumber(value)) { 
        return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE); 
    } 
    return buildValidationSucceededResult(); 
}; 

export const validateConceptField = (value: string): FieldValidationResult => { 
    if (!isStringValueInformed(value)) { 
        return buildRequiredFieldValidationFailedResponse(); 
    } 
    return buildValidationSucceededResult(); 
};

 export const validateNotesField = (_: string): FieldValidationResult => // Fíjate que aquí el parámetro lo ponemos como un guion bajo, es para que no de error y siga valiendo la misma firma de función que en el resto.
  buildValidationSucceededResult(); 
    
  export const validateRealDateTransferField = ( 
    value?: string 
    ): FieldValidationResult => { 
    if (!isValueNotNullOrUndefined(value)) { 
        return buildValidationSucceededResult(); 
    } 
    if (value && !isDateAfterToday(value)) { 
        return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE); 
    } 
    return buildValidationSucceededResult(); 
};

export const validateEmailField = (value?: string): FieldValidationResult => { 
    if (!isValueNotNullOrUndefined(value)) { 
        return buildValidationSucceededResult(); 
    } 
    if (value && !isEMailWellFormed(value)) { 
        return buildValidationFailedResult(INVALID_EMAIL_MESSAGE); 
    } 
    return buildValidationSucceededResult(); 
}; 


