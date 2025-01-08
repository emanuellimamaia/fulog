import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database.module";
import { IndexLogsController } from "./log/use-cases/index-logs/index-logs.controller";
import { IndexLogsService } from "./log/use-cases/index-logs/index-logs.service";
import { LogRepo } from "./log/repositories/log.repo";
import { CreateLogController } from "./log/use-cases/create-log/create-log.controller";
import { CreateLogService } from "./log/use-cases/create-log/create-log.service";
import { ShowVehicleController } from "./vehicle/use-cases/show-vehicles/show-vehicles.controller";
import { ShowVehiclesService } from "./vehicle/use-cases/show-vehicles/show-vehicles.service";
import { VehicelModule } from "./vehicle.modoule";

@Module({
  imports: [DatabaseModule, VehicelModule],
  controllers: [IndexLogsController, CreateLogController],
  providers: [IndexLogsService, LogRepo, { provide: 'ILogRepo', useExisting: LogRepo }, CreateLogService, ShowVehiclesService],
})
export class LogsModule { }