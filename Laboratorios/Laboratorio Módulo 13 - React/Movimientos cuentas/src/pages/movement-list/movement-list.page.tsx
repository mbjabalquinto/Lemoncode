import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import {  MovementListItemComponent } from "./components/movement-list-item.component";
import { getMovements } from "@/pages/movement-list/api";
import { useParams } from "react-router-dom";
import { MovementVm } from "./movement-list.vm";
import { mapAccountListFromApiToVm } from "./movement-list.mapper";
import { AccountDetailsComponent } from "./components/account-details.component";

export const MovementListPage: React.FC = () => {
    const [movements, setMovements] = React.useState<MovementVm[]>([]);
    
    const { id } = useParams();

    React.useEffect(() => {
        if (id) {
            getMovements(id).then((result) => 
                setMovements(mapAccountListFromApiToVm(result)));
        }

    }, []);

    return (
        <AppLayout>
            <div className={classes.root}>
                <AccountDetailsComponent />
                <MovementListItemComponent movements={movements} />
            </div>
        </AppLayout>
    )
};