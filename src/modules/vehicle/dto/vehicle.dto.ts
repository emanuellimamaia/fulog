import { Company } from "src/modules/companies/domain/company.entity"
import { CompanyDto } from "src/modules/companies/dto/company.dto"
import { LogDto } from "src/modules/log/dto/log.dto"

export type VehicleDto = {
  id: string,
  model: string,
  kilometers: number,
  brand: string,
  license_plate: string,
  year: number,
  type_of_fuel: string,
  status?: boolean
  availability?: string
  company: CompanyDto
  log: LogDto[]
}