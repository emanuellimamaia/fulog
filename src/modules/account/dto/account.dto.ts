import { CompanyDto } from "src/modules/companies/dto/company.dto"

export type AccountDto = {
  id: string,
  role: string,
  username: string
  company: CompanyDto
}