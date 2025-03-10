import { VehicleMapper } from "src/modules/vehicle/mappers/vehicle-mappers";
import { FuelExpenses } from "../domain/fuel-expenses.entity";
import { FuelExpenses as FuelExpensesClient, Vehicle as VehicleClient } from "@prisma/client"

export class FuelExpensesMapper {

  static toDomain(raw: FuelExpensesClient & { vehicle?: VehicleClient }): FuelExpenses {
    return FuelExpenses.create({
      id: raw.id,
      vehicle_id: raw.vehicle_id,
      date: raw.date,
      amount: raw.amount,
      liters: raw.liters,
      price_per_liter: raw.price_per_liter,
      vehicle: raw.vehicle && VehicleMapper.toDomain(raw.vehicle)
    })
  }
  static toDto(fuelExpenses: FuelExpenses) {
    return {
      id: fuelExpenses.id,
      vehicleId: fuelExpenses.vehicleId,
      date: fuelExpenses.date,
      amount: fuelExpenses.amount,
      liters: fuelExpenses.liters,
      price_per_liter: fuelExpenses.price_per_liter,
      vehicle: fuelExpenses.vehicle && VehicleMapper.toDto(fuelExpenses.vehicle)
    }
  }
}