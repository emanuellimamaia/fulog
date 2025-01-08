import { Log as LogClient } from "@prisma/client";
import { Log } from "../domain/logs.entity";
import { LogDto } from "../dto/log.dto";

export class LogMapper {
  static toDomain(raw: LogClient): Log {
    return Log.create({
      accountId: raw.account_id,
      companyId: raw.company_id,
      vehicleId: raw.vehicle_id,
      initialKilometers: raw.initial_kilometers,
      finalKilometers: raw.final_kilometers,
      delivered: raw.delivered,
      notes: raw.notes,
      progress: raw.progress

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

    }
  }
}