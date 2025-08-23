import Axios from "axios"; 
import { Movements, AccountDetails } from "./movement-list.api.model";  

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`; 
const urlDetails = `${import.meta.env.VITE_BASE_API_URL}/account`; 

export const getMovements = (accountId: string): Promise<Movements[]> =>
  Axios.get<Movements[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountDetails = (accountId: string): Promise<AccountDetails> =>
  Axios.get<AccountDetails>(urlDetails, { params: { accountId } }).then(
    ({ data }) => data
  );