import { CompanyDto } from "src/modules/companies/dto/company.dto"
import { LogDto } from "src/modules/log/dto/log.dto"
import { Roles } from "src/shared/core/types.enum"

export type AccountDto = {
  id: string,
  role: string,
  username: string
  email: string
  status: boolean
  phone_number?: string
  company: {
    id: string;
    company_name: string;
  }
  logs: LogDto[]

}