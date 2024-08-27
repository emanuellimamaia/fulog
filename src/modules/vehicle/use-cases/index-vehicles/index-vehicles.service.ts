import { Inject, Injectable } from '@nestjs/common';

import { UseCase } from 'src/shared/use-case';
import { IVehicleRepo } from '../../repositories/vehicle-repo.interface';
import { Vehicle } from '../../domain/vehicle';

type Input = {};

type Result = {
  total: number;
  data: Vehicle[];
};

@Injectable()
export class IndexVehiclesService implements UseCase<Input, Result> {
  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo) { }
  async execute(input: Input): Promise<Result> {
    const result = await this.vehicleRepo.findAll()
    return result
  }
}
