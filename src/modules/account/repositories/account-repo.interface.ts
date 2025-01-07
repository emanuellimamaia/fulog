import { Account } from "../domain/account.entity";

export interface IAccountRepo {
  findAll(companyId: string): Promise<{ total: number; data: Account[] }>
  findById(id: string): Promise<Account>
  create(account: Account): Promise<Account>
  findByEmail(email: string): Promise<Account>
}