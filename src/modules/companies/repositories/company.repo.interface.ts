import { Company } from "../domain/company";

export interface ICompanyRepo {
  findAll(): Promise<{ total: number, data: Company[] }>
  findById(id: string): Promise<Company>
  create(company: Company): Promise<Company>
}