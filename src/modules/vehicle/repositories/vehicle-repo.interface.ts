import { Vehicle } from "../domain/vehicle.entity";

export interface IVehicleRepo {
  findAll(companyId: string): Promise<{ total: number, data: Vehicle[] }>
  findById(id: string): Promise<Vehicle>
  create(vehicle: Vehicle): Promise<Vehicle>
  changeAvailability(id: string, availability: string): Promise<Vehicle>
  updateKilometers: (id: string, kilometers: number) => Promise<Vehicle>
} 