import Axios from "axios";
import { Account } from "./create-account.api-model";

const url = "http://localhost:3000/account-list";

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);