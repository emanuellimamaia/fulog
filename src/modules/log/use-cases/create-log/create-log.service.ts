import { Inject, Injectable } from '@nestjs/common';
import { CreateLogDto } from '../../dto/create-log';
import { Log } from '../../domain/logs.entity';
import { UseCase } from 'src/shared/use-case';
import { ILogRepo } from '../../repositories/log.repo.interface';
import { LogProgress } from 'src/shared/global.constants';

type Input = CreateLogDto & {
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
    private readonly logRepo: ILogRepo

  ) { }

  async execute(input: Input): Promise<Result> {
    const log = Log.create({
      accountId: input.accountId,
      companyId: input.companyId,
      vehicleId: input.vehicleId,
      initialKilometers: 123,
      notes: input.notes,
      progress: LogProgress.InProgress
    })
    const data = await this.logRepo.create(log)
    return { type: 'CreateLogSucess', data }
  }
}
