import { Account } from "src/modules/account/domain/account.entity";
import { Company } from "../domain/company.entity";

export interface ICompanyRepo {
  findAll(): Promise<{ total: number, data: Company[] }>
  findById(id: string): Promise<Company>
  create(company: Company, userInput: { username: string; email: string; password: string }): Promise<Company>;
}