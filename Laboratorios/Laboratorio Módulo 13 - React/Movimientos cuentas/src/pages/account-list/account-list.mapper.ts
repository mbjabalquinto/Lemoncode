import * as apiModel from "./api"; 
import * as viewModel from "./account-list.vm"; 

export const mapAccountListFromApiToVm = ( 
  accountList: apiModel.Account[] 
): viewModel.AccountVm[] => 
  accountList.map((account) => ({ 
    id: account.id, 
    iban: account.iban, 
    name: account.name, 
    balance: account.balance.toString(), 
    lastTransaction: new Date(account.lastTransaction), 
  })); 