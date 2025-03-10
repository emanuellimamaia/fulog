import { Inject, Injectable } from "@nestjs/common"
import { FuelExpenses } from "../../domain/fuel-expenses.entity"
import { IFuelExpensesRepo } from "../../repositories/fuel-expenses-repo.interface"

type Input = {
  vehicleId: string
}

type Result = {
  type: "FuelExpensesSucess"
  data: FuelExpenses[]
}

@Injectable()
export class IndexFuelExpensesService {
  constructor(
    @Inject('IFuelExpensesRepo')
    private readonly fuelExpensesRepo: IFuelExpensesRepo) { }
  async execute(input: Input): Promise<Result> {
    const result = await this.fuelExpensesRepo.findAll(input.vehicleId)
    return {
      type: "FuelExpensesSucess",
      data: result.data
    }
  }
}