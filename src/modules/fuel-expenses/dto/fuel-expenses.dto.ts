import { VehicleDto } from "src/modules/vehicle/dto/vehicle.dto";

export interface FuelExpensesDto {
  id: string;
  data: Date;
  amout: number;
  liters: number;
  price_per_liter: number;
  created_at: Date;
  updated_at: Date;
  vehicle: VehicleDto
}