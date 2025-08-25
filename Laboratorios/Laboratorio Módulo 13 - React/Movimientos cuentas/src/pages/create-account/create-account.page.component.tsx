import React from "react";
import {
  CreateAccountVm,
  createEmptyAccountVm,
  CreateAccountError,
  createEmptyAccountError,
} from "./create-account.model";
import { validateForm } from "./validations/create-account.form.validations";
import { accountOptions } from "./create-account.model"; // tu lista de opciones
import { saveAccount } from "./api/create-account.api";
import { useNavigate } from "react-router-dom";
import classes from "./create-account.page.component.module.css";
//import { getAccountList } from "../account-list/api";


export const CreateNewAccountPage: React.FC = () => {
    const navigate = useNavigate();
    const [account, setAccount] = React.useState<CreateAccountVm>(createEmptyAccountVm());

    const [errors, setErrors] = React.useState<CreateAccountError>(createEmptyAccountError());

    // Manejador para en envio del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Hacemos las validaciones
    const validationResult = validateForm(account);
    setErrors(validationResult.errors);

    // si todo es correcto llamamos a la API para guardar la cuenta y navegamos a la lista de cuentas
    if (validationResult.succeeded) {
        saveAccount(account).then(() => {
           navigate("/account-list");
        });
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta</label>
            <select name="type" value={account.type} onChange={handleFieldChange}>
            <option value="">Selecciona tipo de cuenta</option>
            {accountOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
            ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
            </div>
            <div>
            <label>Alias</label>
            <input
                name="name"
                value={account.name}
                onChange={handleFieldChange}
                className={classes.small}
            />
            <p className={classes.error}>{errors.name}</p>
            </div>
        </div>
        <div>
            <button className={classes.button} type="submit">Guardar</button>
        </div>
        </form>
        
    </div>        
  );
};