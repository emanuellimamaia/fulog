import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database.module";
import { IndexVehicleController } from "./vehicle/use-cases/index-vehicles/index-accounts.controller";
import { VehicleRepo } from "./vehicle/repositories/vehicle-repo";
import { IndexVehiclesService } from "./vehicle/use-cases/index-vehicles/index-vehicles.service";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexVehicleController],
  providers: [IndexVehiclesService, VehicleRepo, { provide: 'IVehicleRepo', useExisting: VehicleRepo }]
})

export class VehicelModule { }