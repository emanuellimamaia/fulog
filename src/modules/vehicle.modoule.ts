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

import { MaintenanceRepo } from "./maintenance/repositories/maintenance-repo";
import { CreateMaintenanceController } from "./maintenance/use-cases/create-maintenance/create-maintenance.controller";
import { CreateMaintenanceService } from "./maintenance/use-cases/create-maintenance/create-maintenance.service";
import { GetVehicleMaintenancesController } from "./maintenance/use-cases/get-vehicle-maintenances/get-vehicle-maintenances.controller";
import { GetVehicleMaintenancesService } from "./maintenance/use-cases/get-vehicle-maintenances/get-vehicle-maintenances.service";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexVehicleController, CreateVehiclesController, ShowVehicleController, CreateMaintenanceController, GetVehicleMaintenancesController],
  providers: [
    IndexVehiclesService,
    VehicleRepo,
    MaintenanceRepo,
    { provide: 'IVehicleRepo', useExisting: VehicleRepo },
    { provide: 'IMaintenance', useExisting: MaintenanceRepo },
    CreateVehicleService,
    ShowVehiclesService,
    ChangeAvailabilityVehicleService,
    UpdateKilometersService,
    CreateMaintenanceService,
    GetVehicleMaintenancesService
  ],
  exports: ['IVehicleRepo', 'IMaintenance', ShowVehiclesService, ChangeAvailabilityVehicleService, UpdateKilometersService]
})
export class VehicelModule { }