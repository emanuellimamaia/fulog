import { Vehicle as VehicleClient } from '@prisma/client'
import { Vehicle } from '../domain/vehicle';
import { VehicleDto } from '../dto/vehicle.dto';

export class VehicleMapper {
  static toDomain(raw: VehicleClient): Vehicle {
    return Vehicle.create({
      brand: raw.brand,
      kilometers: raw.kilometers,
      license_plate: raw.license_plate,
      type_of_fuel: raw.type_of_fuel,
      year: raw.year
    })
  }
  static toDto(vehicle: Vehicle): VehicleDto {
    return {
      brand: vehicle.brand,
      kilometers: vehicle.kilometers,
      license_plate: vehicle.license_plate,
      type_of_fuel: vehicle.type_of_fuel,
      year: vehicle.year
    }
  }
}