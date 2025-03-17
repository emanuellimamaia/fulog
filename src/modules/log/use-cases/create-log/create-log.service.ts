import { ConsoleLogger, Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateLogDto } from '../../dto/create-log';
import { Log } from '../../domain/logs.entity';
import { UseCase } from 'src/shared/use-case';
import { ILogRepo } from '../../repositories/log.repo.interface';
import { LogProgress, VehicleAvailability } from 'src/shared/global.constants';
import { ShowVehiclesService } from 'src/modules/vehicle/use-cases/show-vehicles/show-vehicles.service';
import { ChangeAvailabilityVehicleService } from 'src/modules/vehicle/use-cases/change-availability-vehicle/change-availability-vehicle.service';
import { error } from 'console';

type Input = {
  accountId: string
  companyId: string
  vehicleId: string

}

type Result = {
  type: 'CreateLogSucess'
  data: Log
}


@Injectable()
export class CreateLogService implements UseCase<Input, Result> {
  constructor(
    @Inject('ILogRepo')
    private readonly logRepo: ILogRepo,
    private readonly showVehiclesService: ShowVehiclesService,
    private readonly changeAvailabilityVehicleService: ChangeAvailabilityVehicleService


  ) { }

  async execute(input: Input): Promise<Result> {

    const vehicle = await this.showVehiclesService.execute(input.vehicleId)

    if (vehicle.availability === VehicleAvailability.Unavailable) {
      throw new NotAcceptableException('Veículo indisponível')
    }
    await this.changeAvailabilityVehicleService.updateAVailability(vehicle.id, VehicleAvailability.Unavailable)
    const log = Log.create({
      accountId: input.accountId,
      companyId: input.companyId,
      vehicleId: input.vehicleId,
      initialKilometers: vehicle.kilometers,
      progress: LogProgress.InProgress
    })
    const data = await this.logRepo.create(log)
    return { type: 'CreateLogSucess', data }
  }
}
