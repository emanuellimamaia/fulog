import { FuelExpenses } from "../domain/fuel-expenses.entity";

export interface IFuelExpensesRepo {
  create(fuelExpense: FuelExpenses): Promise<FuelExpenses>
  findAll(vehicleId: string)
}