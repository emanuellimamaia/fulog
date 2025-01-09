import { AccountDto } from "src/modules/account/dto/account.dto"
import { CompanyDto } from "src/modules/companies/dto/company.dto"
import { VehicleDto } from "src/modules/vehicle/dto/vehicle.dto"

export interface LogDto {
  id: string
  companyId: string
  vehicleId: string
  accountId: string
  initialKilometers: number
  finalKilometers?: number,
  progress: string
  delivered?: Date
  notes?: string
  company: CompanyDto
  vehicle: VehicleDto
  account: AccountDto
  created_at: Date
} 