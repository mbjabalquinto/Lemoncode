import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm"; 
import classes from "./account-list.page.module.css"; 
import { AccountListTableComponent } from "./components/account-list-table.component";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
    const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
    React.useEffect(() => {
      getAccountList().then((result) =>
    setAccountList(mapAccountListFromApiToVm(result)));  
    }, []);
    return (
    <AppLayout>
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <h1>Mis cuentas</h1>
                <Link to= {appRoutes.createAccount} className={classes.linkNoUnderline}> <button>AGREGAR NUEVA CUENTA</button> </Link>
            </div>
             <AccountListTableComponent accountList={accountList} />
        </div>
    </AppLayout>
)};