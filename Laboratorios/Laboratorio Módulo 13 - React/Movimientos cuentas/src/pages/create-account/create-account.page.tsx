import React from "react";
import { AppLayout } from "@/layouts";
import { CreateNewAccountPage } from "./create-account.page.component";
import classes from "./create-account.page.module.css";

export const CreateAccountPage: React.FC = () => {
    return (
        <AppLayout>
            <div className={classes.container}>
                <h1 className={classes.title}>Cuenta Bancaria</h1>
                <CreateNewAccountPage/>
            </div>
        </AppLayout>
    );
};