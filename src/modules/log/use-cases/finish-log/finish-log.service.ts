import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UseCase } from 'src/shared/use-case';
import { Log } from '../../domain/logs.entity';
import { ILogRepo } from '../../repositories/log.repo.interface';
import { FinishLogDto } from '../../dto/finish-log';
import { LogProgress, VehicleAvailability } from 'src/shared/global.constants';
import { ChangeAvailabilityVehicleService } from 'src/modules/vehicle/use-cases/change-availability-vehicle/change-availability-vehicle.service';
import { UpdateKilometersService } from 'src/modules/vehicle/use-cases/update-kilometers/update-kilometers.service';

type Input = FinishLogDto & {
  logId: string
}

type Result = {
  type: 'FisinishLogSucess'
  data: Log
}
@Injectable()
export class FinishLogService implements UseCase<Input, Result> {
  constructor(
    @Inject('ILogRepo')
    private readonly logRepo: ILogRepo,
    private readonly changeAvailabilityVehicleService: ChangeAvailabilityVehicleService,
    private readonly updateKilometersService: UpdateKilometersService
  ) { }
  async execute(input: Input): Promise<Result> {
    const log = await this.logRepo.findById(input.logId);
    if (!log) {
      throw new NotFoundException(`não foi possivel achar a viagem`);

    }
    if (log.progress === LogProgress.Completed) {
      throw new NotFoundException(`Viagem não pode ser finalizada por não estar em andamento`);
    }
    if (input.final_kilometers < log.initialKilometers) {
      throw new NotFoundException('Quilometragem incompativel')
    }
    try {

      log.finalKilometers = input.final_kilometers;
      log.delivered = new Date();
      log.notes = input.notes;
      log.progress = LogProgress.Completed;

      await this.changeAvailabilityVehicleService.updateAVailability(log.vehicleId, VehicleAvailability.Available)
      await this.updateKilometersService.execute(log.vehicleId, input.final_kilometers)

      const data = await this.logRepo.finish(log);
      return { type: 'FisinishLogSucess', data }
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }

  }
}
