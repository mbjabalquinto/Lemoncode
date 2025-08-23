import React from "react";
import classes from "./movement-list-item.component.module.css";
import { MovementVm } from "../movement-list.vm";

interface Props {
    movements: MovementVm[]; 
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
    const { movements } = props;
    return (
        <div className={classes.gridContainer}>
            
            <div className={classes.gridTable}>
            <div className={classes.headerTable}>
                <span className={classes.headerCell}>FECHA</span>
                <span className={classes.headerCell}>FECHA VALOR</span>
                <span className={classes.headerCell}>DESCRIPCIÓN</span>
                <span className={classes.headerCell}>IMPORTE</span>
                <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            </div> 
        
       
            {movements.map((movement) => (
                <div key={movement.id} className={classes.row}>
                    <span className={classes.dataCell}>{movement.transaction.toLocaleDateString()}</span>
                    <span className={classes.dataCell}>{movement.realTransaction.toLocaleDateString()}</span>
                    <span className={classes.dataCell}>{movement.description}</span>
                    <span className={classes.dataCell}>{movement.amount}</span>
                    <span className={classes.dataCell}>{movement.balance}</span>
                </div>
    ))}
        </div>
    </div>
    )

};