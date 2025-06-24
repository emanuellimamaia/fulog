import { VehicleDto } from "src/modules/vehicle/dto/vehicle.dto"

export type MaintenanceDto = {
  id: string
  value: number
  name: string
  date: Date
  created_at: Date
  vehicle: VehicleDto;
}