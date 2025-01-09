import { Log as LogClient, Company as CompanyClient, Account as AccountClient, Vehicle as VehicleClient } from "@prisma/client";
import { Log } from "../domain/logs.entity";
import { LogDto } from "../dto/log.dto";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";
import { AccountMapper } from "src/modules/account/mappers/account.mappers";
import { VehicleMapper } from "src/modules/vehicle/mappers/vehicle-mappers";

export class LogMapper {
  static toDomain(raw: LogClient & { company?: CompanyClient, account?: AccountClient, vehicle?: VehicleClient }): Log {
    return Log.create({
      accountId: raw.account_id,
      companyId: raw.company_id,
      vehicleId: raw.vehicle_id,
      initialKilometers: raw.initial_kilometers,
      finalKilometers: raw.final_kilometers,
      delivered: raw.delivered,
      notes: raw.notes,
      progress: raw.progress,
      company: raw.company && CompanyMapper.toDomain(raw.company),
      account: raw.account && AccountMapper.toDomain(raw.account),
      vehicle: raw.vehicle && VehicleMapper.toDomain(raw.vehicle)

    }, { created_at: raw.created_at, id: raw.id, updated_at: raw.updated_at })
  }
  static toDto(log: Log): LogDto {
    return {
      id: log.id,
      accountId: log.accountId,
      companyId: log.companyId,
      vehicleId: log.vehicleId,
      initialKilometers: log.initialKilometers,
      finalKilometers: log.finalKilometers,
      delivered: log.delivered,
      notes: log.notes,
      progress: log.progress,
      company: log.company && CompanyMapper.toDto(log.company),
      vehicle: log.vehicle && VehicleMapper.toDto(log.vehicle),
      account: log.account && AccountMapper.toDto(log.account),
      created_at: log.created_at,
    }
  }
}