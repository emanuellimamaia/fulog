import { CompanyDto } from "src/modules/companies/dto/company.dto"
import { Roles } from "src/shared/core/types.enum"

export type AccountDto = {
  id: string,
  role: string,
  username: string
  email: string
  status: boolean
  company: {
    id: string;
    company_name: string;
  }

}