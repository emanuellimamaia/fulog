import { Inject, Injectable } from "@nestjs/common";
import { IFuelExpensesRepo } from "../../repositories/fuel-expenses-repo.interface";
import { UseCase } from "src/shared/use-case";
import { CreateFuelExpensesDto } from "../../dto/create-fuel-expenses.dto";
import { FuelExpenses } from "../../domain/fuel-expenses.entity";
import { ShowVehiclesService } from "src/modules/vehicle/use-cases/show-vehicles/show-vehicles.service";
type Input = {
  fuelExpenses: CreateFuelExpensesDto
  vehicleId: string
}
type Result = {
  type: "CreateFuelExpensesSucess"
  data: FuelExpenses
}

@Injectable()
export class CreateFuelExpensesService implements UseCase<Input, Result> {
  constructor(
    @Inject('IFuelExpensesRepo')
    private readonly fuelExpensesRepo: IFuelExpensesRepo,
    private readonly showVehiclesService: ShowVehiclesService,

  ) { }

  async execute(input: Input): Promise<Result> {
    const vehicle = await this.showVehiclesService.execute(input.vehicleId)

    const fuelExpenses = FuelExpenses.create({
      vehicle_id: vehicle.id,
      liters: input.fuelExpenses.liters,
      date: input.fuelExpenses.date,
      price_per_liter: input.fuelExpenses.price_per_liter,
      amount: input.fuelExpenses.amount,

    })

    const data = await this.fuelExpensesRepo.create(fuelExpenses)
    return {
      type: "CreateFuelExpensesSucess",
      data
    }
  }
}