export const routesPrefixes  = {
    accountList: "/account-list",
    transfer: "/transfer",
    movements: "/movements",
}

export const appRoutes = {
    root: "/",
    accountList: routesPrefixes.accountList,
    editAccount: "/edit-account/:id",
    movements: `${routesPrefixes.movements}/:id`,               // Un usuario puede ver los movimientos de una cuenta en concreto.
    transfer: routesPrefixes.transfer,                        // Un usuario puede elegir hacer una transferencia sin especificar la cuenta de origen.
    transferFromAccount: `${routesPrefixes.transfer}/:id`,   //  Un usuario puede elegir hacer una transferencia desde una cuenta en concreto.
};