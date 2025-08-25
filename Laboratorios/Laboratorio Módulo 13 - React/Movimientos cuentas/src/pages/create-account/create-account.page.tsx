import React from "react";
import { AppLayout } from "@/layouts";
import { CreateNewAccountPage } from "./create-account.page.component";

export const CreateAccountPage: React.FC = () => {
    return (
        <AppLayout>
            <div>
                <h1>Cuenta Bancaria</h1>
                <CreateNewAccountPage/>
            </div>
        </AppLayout>
    );
};