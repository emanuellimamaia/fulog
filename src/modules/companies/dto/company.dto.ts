import { AccountDto } from "src/modules/account/dto/account.dto"
import { LogDto } from "src/modules/log/dto/log.dto"
import { VehicleDto } from "src/modules/vehicle/dto/vehicle.dto"

export interface CompanyDto {
  id: string
  company_name: string
  accounts?: AccountDto[]
  vehicles?: VehicleDto[]
  logs?: LogDto[]
  created_at: Date
  updated_at: Date
}

