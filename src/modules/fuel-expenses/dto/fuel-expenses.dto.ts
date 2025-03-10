import { VehicleDto } from "src/modules/vehicle/dto/vehicle.dto";

export interface FuelExpensesDto {
  id: string;
  fuel_expenses: number;
  created_at: Date;
  updated_at: Date;
  vehicle: VehicleDto
}