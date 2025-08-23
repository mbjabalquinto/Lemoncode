import * as viewModel from "./movement-list.vm"; 
import { Movements, AccountDetails } from "./api/movement-list.api.model";

export const mapAccountListFromApiToVm = (movementList: Movements[]): viewModel.MovementVm[] => 
  movementList.map((movement) => ({ 
    id: movement.id, 
    accountId: movement.accountId, 
    description: movement.description, 
    amount: movement.amount,
    balance: movement.balance,
    transaction: new Date(movement.transaction), 
    realTransaction: new Date(movement.realTransaction), 
  })); 


  export const mapAccountDetailsFromApiToVm = (accountDetails: AccountDetails): viewModel.AccountDetailsVm => ({
    id: accountDetails.id,
    iban: accountDetails.iban,
    name: accountDetails.name,
    balance: accountDetails.balance,
    lastTransaction: new Date(accountDetails.lastTransaction),
  });