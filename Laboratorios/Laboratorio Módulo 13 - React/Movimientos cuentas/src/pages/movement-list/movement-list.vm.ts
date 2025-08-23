export interface MovementVm{
    id: string;
    description: string;
    amount: string;
    balance: number;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}

export interface AccountDetailsVm {
    id: string;
    iban: string;
    name: string;
    balance: number;
    lastTransaction: Date;
}