import { Company } from "../domain/company";

export interface ICompanyRepo {
  findAll(): Promise<{ total: number, data: Company[] }>
  create(company: Company): Promise<Company>
}