import React from "react";
import { LoginFormComponent } from "./components/login-form.component";
import { Credentials } from "./login.vm";
import { useNavigate } from "react-router-dom";
import { isValidLogin } from './api';
import { mapCredentialsFromVmToApi } from './login.mapper';
import { appRoutes } from "@/core/router"; 
import classes from "./login.page.module.css";
import { useProfileContext } from "@/core/profile";


export const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { setUserProfile } = useProfileContext();
    
    const handleSubmit = (credentials: Credentials) => {
        const apiCredentials = mapCredentialsFromVmToApi(credentials);
        isValidLogin(apiCredentials).then((isValid) => {
            if (isValid) {
                setUserProfile(credentials.user);
                navigate(appRoutes.accountList);
            } else {
                alert("Usuario o clave no correctas ppsst: admin@email.com / test ");
            }
        }); 
    };

    return (
    <>
        <header className={classes.header}>
            <img className={classes.logo} src="assets/logo_header.svg" />
        </header>
        <div className={classes.bgImg}></div>
        <div className={classes.box}>
            <h1> Acceso </h1>
            <LoginFormComponent onLogin={handleSubmit} />
            <h4 className={classes.inputFooter}> Está usted en un <strong>sitio seguro</strong> </h4> 
        </div>
    </>
)}; 