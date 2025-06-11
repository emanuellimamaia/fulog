import { Account as AccountClient, Company as CompanyClient, Log as LogClient, Vehicle as VechicleCliemt } from "@prisma/client";
import { Company } from "../domain/company.entity";
import { CompanyDto } from "../dto/company.dto";
import { AccountMapper } from "src/modules/account/mappers/account.mappers";
import { VehicleMapper } from "src/modules/vehicle/mappers/vehicle-mappers";
import { LogMapper } from "src/modules/log/mappers/log.mappers";

export class CompanyMapper {
  static toDomain(raw: CompanyClient & { logs?: LogClient[], vehicles?: VechicleCliemt[], accounts?: AccountClient[] }) {
    return Company.create({
      id: raw.id,
      company_name: raw.company_name,
      logs: raw.logs?.map(log => LogMapper.toDomain(log)),
      vehicles: raw.vehicles?.map(vehicle => VehicleMapper.toDomain(vehicle)),
      accounts: raw.accounts?.map(account => AccountMapper.toDomain(account))
    }, { created_at: raw.created_at, id: raw.id, updated_at: raw.updated_at })
  }
  static toDto(company: Company): CompanyDto {
    return {
      id: company.id,
      company_name: company.company_name,
      created_at: company.created_at,
      updated_at: company.updated_at,
      logs: company.logs?.map(log => LogMapper.toDto(log)),
      vehicles: company.vehicles?.map(vehicle => VehicleMapper.toDto(vehicle)),
      accounts: company.accounts?.map(account => AccountMapper.toDto(account))
    }
  }
}