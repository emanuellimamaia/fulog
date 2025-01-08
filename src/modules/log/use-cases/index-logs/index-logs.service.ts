import { Inject, Injectable } from '@nestjs/common';
import { Log } from '../../domain/logs.entity';
import { UseCase } from 'src/shared/use-case';
import { ILogRepo } from '../../repositories/log.repo.interface';

type Input = {
}
type Result = {
  total: number,
  data: Log[]
}


@Injectable()
export class IndexLogsService implements UseCase<Input, Result> {
  constructor(
    @Inject('ILogRepo')
    private readonly logRepo: ILogRepo
  ) { }

  async execute(input: Input): Promise<Result> {
    const result = await this.logRepo.findAll()
    return result
  }
}
