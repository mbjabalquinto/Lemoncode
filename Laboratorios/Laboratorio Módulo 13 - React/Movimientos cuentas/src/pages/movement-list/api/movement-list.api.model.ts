export interface Movements{
    id: string;
    description: string;
    amount: string;
    balance: number;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}

export interface AccountDetails {
    id: string;
    iban: string;
    name: string;
    balance: number;
    lastTransaction: Date;
}      

export const newAccountDetailsEmpty = ():AccountDetails => (
    {
    id: "",
    iban: "",
    name: "",
    balance: 0,
    lastTransaction: new Date(),
    }
);