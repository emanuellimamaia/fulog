import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database.module";
import { IndexLogsController } from "./log/use-cases/index-logs/index-logs.controller";
import { IndexLogsService } from "./log/use-cases/index-logs/index-logs.service";
import { LogRepo } from "./log/repositories/log.repo";
import { CreateLogController } from "./log/use-cases/create-log/create-log.controller";
import { CreateLogService } from "./log/use-cases/create-log/create-log.service";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexLogsController, CreateLogController],
  providers: [IndexLogsService, LogRepo, { provide: 'ILogRepo', useExisting: LogRepo }, CreateLogService],
})
export class LogsModule { }