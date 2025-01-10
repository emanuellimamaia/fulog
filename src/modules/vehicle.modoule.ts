import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database.module";
import { IndexVehicleController } from "./vehicle/use-cases/index-vehicles/index-accounts.controller";
import { VehicleRepo } from "./vehicle/repositories/vehicle-repo";
import { IndexVehiclesService } from "./vehicle/use-cases/index-vehicles/index-vehicles.service";
import { CreateVehiclesController } from "./vehicle/use-cases/create-vehicles/create-vehicle.controller";
import { CreateVehicleService } from "./vehicle/use-cases/create-vehicles/create-vehicle.service";
import { ShowVehiclesService } from "./vehicle/use-cases/show-vehicles/show-vehicles.service";
import { ShowVehicleController } from "./vehicle/use-cases/show-vehicles/show-vehicles.controller";
import { ChangeAvailabilityVehicleService } from "./vehicle/use-cases/change-availability-vehicle/change-availability-vehicle.service";
import { UpdateKilometersService } from "./vehicle/use-cases/update-kilometers/update-kilometers.service";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexVehicleController, CreateVehiclesController, ShowVehicleController],
  providers: [IndexVehiclesService, VehicleRepo, { provide: 'IVehicleRepo', useExisting: VehicleRepo }, CreateVehicleService, ShowVehiclesService, ChangeAvailabilityVehicleService, UpdateKilometersService],
  exports: ['IVehicleRepo', ShowVehiclesService, ChangeAvailabilityVehicleService, UpdateKilometersService]
})

export class VehicelModule { }