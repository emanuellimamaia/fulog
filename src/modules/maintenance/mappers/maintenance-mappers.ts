import { Maintenance as MaintenanceClient, Vehicle as VehicleClient } from "@prisma/client";
import { MainTenance } from "../domain/maintenance.entity";
import { MaintenanceDto } from "src/modules/vehicle/dto/maintenance.dto";
import { VehicleMapper } from "src/modules/vehicle/mappers/vehicle-mappers";


export class MaintenanceMappper {
  static toDomain(raw: MaintenanceClient & { vehicle?: VehicleClient }): MainTenance {
    return MainTenance.create({
      id: raw.id,
      name: raw.name,
      value: raw.value,
      date: raw.date,
      vehicleId: raw.vehicleId,
      vehicle: raw.vehicle && VehicleMapper.toDomain(raw.vehicle)

    })
  }

  static toDto(maintenance: MainTenance): MaintenanceDto {
    return {
      id: maintenance.id,
      name: maintenance.name,
      value: maintenance.value,
      date: maintenance.date,
      vehicle: maintenance.vehicle && VehicleMapper.toDto(maintenance.vehicle),
      created_at: maintenance.created_at
    }
  }
}