import { Inject, Injectable } from '@nestjs/common';
import { CreateLogDto } from '../../dto/create-log';
import { Log } from '../../domain/logs';
import { UseCase } from 'src/shared/use-case';
import { ILogRepo } from '../../repositories/log.repo.interface';

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
      initialKilometers: input.initialKilometers,
      notes: input.notes,
    })
    const data = await this.logRepo.create(log)
    return { type: 'CreateLogSucess', data }
  }
}
