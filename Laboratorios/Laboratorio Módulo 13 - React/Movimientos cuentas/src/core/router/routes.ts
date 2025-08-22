export const routesPrefixes  = {
    accountList: "/account-list",
    transfer: "/transfer",
}

export const appRoutes = {
    root: "/",
    accountList: routesPrefixes.accountList,
    editAccount: "/edit-account/:id",
    movements: "/movements/:id",
    transfer: routesPrefixes.transfer,                        // Un usuario puede elegir hacer una transferencia sin especificar la cuenta de origen.
    transferFromAccount: `${routesPrefixes.transfer}/:id`,   //  Un usuario pude elegir hacer una transferencia desde una cuenta en concreto.
};