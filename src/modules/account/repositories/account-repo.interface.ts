import { Account } from "../domain/account"

export interface IAccountRepo {
  findAll(): Promise<{ total: number; data: Account[] }>
}