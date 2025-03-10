import { Module } from "@nestjs/common";
import { VehicelModule } from "./vehicle.modoule";
import { DatabaseModule } from "src/infra/database.module";
import { IndexFuelExpensesController } from "./fuel-expenses/use-cases/index-fuel-expenses/index-fuel-expenses.controller";
import { CreateFuelExpensesController } from "./fuel-expenses/use-cases/create-fuel-expenses/create-fuel-expenses.controller";
import { IndexFuelExpensesService } from "./fuel-expenses/use-cases/index-fuel-expenses/index-fuel-expenses.service";
import { FuelExpensesRepo } from "./fuel-expenses/repositories/fuel-expenses-repo";
import { CreateFuelExpensesService } from "./fuel-expenses/use-cases/create-fuel-expenses/create-fuel-expenses.service";

@Module({
  imports: [DatabaseModule, VehicelModule],
  controllers: [IndexFuelExpensesController, CreateFuelExpensesController],
  providers: [IndexFuelExpensesService, FuelExpensesRepo, { provide: 'IFuelExpensesRepo', useExisting: FuelExpensesRepo }, CreateFuelExpensesService]
})

export class FuelExpensesModule { }