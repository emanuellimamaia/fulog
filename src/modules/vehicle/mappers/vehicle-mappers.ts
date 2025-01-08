import { Vehicle as VehicleClient } from '@prisma/client'
import { Vehicle } from '../domain/vehicle.entity';
import { VehicleDto } from '../dto/vehicle.dto';

export class VehicleMapper {
  static toDomain(raw: VehicleClient): Vehicle {
    return Vehicle.create({
      id: raw.id,
      availability: raw.availability,
      status: raw.status,
      model: raw.model,
      company_id: raw.company_id,
      brand: raw.brand,
      kilometers: raw.kilometers,
      license_plate: raw.license_plate,
      type_of_fuel: raw.type_of_fuel,
      year: raw.year,

    })
  }
  static toDto(vehicle: Vehicle): VehicleDto {
    return {
      id: vehicle.id,
      availability: vehicle.availability,
      status: vehicle.status,
      model: vehicle.model,
      brand: vehicle.brand,
      kilometers: vehicle.kilometers,
      license_plate: vehicle.license_plate,
      type_of_fuel: vehicle.type_of_fuel,
      year: vehicle.year
    }
  }
}