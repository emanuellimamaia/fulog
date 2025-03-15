import { Company as CompanyClient, Log as LogClient, Vehicle as VehicleClient, FuelExpenses as FuelExpensesClient } from '@prisma/client'
import { Vehicle } from '../domain/vehicle.entity';
import { VehicleDto } from '../dto/vehicle.dto';
import { CompanyMapper } from 'src/modules/companies/mappers/company.mappers';
import { LogMapper } from 'src/modules/log/mappers/log.mappers';
import { FuelExpensesMapper } from 'src/modules/fuel-expenses/mappers/fuel-expenses.mappers';


export class VehicleMapper {
  static toDomain(raw: VehicleClient & { company?: CompanyClient } & { logs?: LogClient[] },): Vehicle {
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
      company: raw.company && CompanyMapper.toDomain(raw.company),
      log: raw.logs && raw.logs.map(log => LogMapper.toDomain(log)),


    }, {
      id: raw.id,
      created_at: raw.created_at,
      updated_at: raw.updated_at
    });
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
      year: vehicle.year,
      company: vehicle.company && CompanyMapper.toDto(vehicle.company),
      log: vehicle.log && vehicle.log.map((lg) => LogMapper.toDto(lg)),
      fuelExpenses: vehicle.fuelExpenses && vehicle.fuelExpenses.map((fuel) => FuelExpensesMapper.toDto(fuel))
    }
  }
}