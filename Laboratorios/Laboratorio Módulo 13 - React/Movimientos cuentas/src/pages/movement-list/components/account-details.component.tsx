import React from "react";
import { AccountDetailsVm } from "../movement-list.vm";
import { getAccountDetails } from "../api/movement-list.api";
import { useParams } from "react-router-dom";
import { mapAccountDetailsFromApiToVm } from "../movement-list.mapper";
import { newAccountDetailsEmpty } from "../api/movement-list.api.model";
import classes from "./account-details.component.module.css";



export const AccountDetailsComponent: React.FC = () => {
    const [details, setDetails] = React.useState<AccountDetailsVm>(newAccountDetailsEmpty())
    
    const { id } = useParams();

    React.useEffect(() => {
        if (id) {
            getAccountDetails(id).then((result) => 
                setDetails(mapAccountDetailsFromApiToVm(result)));
        }

    }, []);

return (
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <h1>Saldos y útlimos movimientos</h1>
                <h1>Saldo disponible: {details.balance} €</h1>
            </div>
       
       <div className={classes.accountDetailsContainer}>
            <h1>Alias: {details.name}</h1>
            <h2>IBAN: {details.iban}</h2>
        </div> 
         
        </div> 
    );
};