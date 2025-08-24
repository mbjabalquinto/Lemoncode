import React from "react";
import { AccountDetailsVm } from "../movement-list.vm";
import classes from "./account-details.component.module.css";

interface Props {
    details: AccountDetailsVm;
}

export const AccountDetailsComponent: React.FC<Props> = (props) => {
    const { details } = props;

return (
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <h1>Saldos y útlimos movimientos</h1>
                <div className={classes.balance}>
                    <span className={classes.label}>SALDO DISPONIBLE</span>
                    <span className={classes.amount}>{details.balance} €</span>
                </div>
            </div>

       
       <div className={classes.accountDetails}>
            <h1>Alias: {details.name}</h1>
            <h2>IBAN: {details.iban}</h2>
        </div> 

        </div> 
    );
};