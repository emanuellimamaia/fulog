import { Vehicle } from "../domain/vehicle";

export interface IVehicleRepo {
  findAll(): Promise<{ total: number, data: Vehicle[] }>
  findById(id: string): Promise<Vehicle>
  create(vehicle: Vehicle): Promise<Vehicle>
} 