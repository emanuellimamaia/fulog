import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database.module";
import { IndexLogsController } from "./log/use-cases/index-logs/index-logs.controller";
import { IndexLogsService } from "./log/use-cases/index-logs/index-logs.service";
import { LogRepo } from "./log/repositories/log.repo";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexLogsController],
  providers: [IndexLogsService, LogRepo, { provide: 'ILogRepo', useExisting: LogRepo }],
})
export class LogsModule { }