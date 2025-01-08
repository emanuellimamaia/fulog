import { Inject, Injectable } from '@nestjs/common';
import { IVehicleRepo } from '../../repositories/vehicle-repo.interface';
import { UseCase } from 'src/shared/use-case';
import { Vehicle } from '@prisma/client';


@Injectable()
export class ShowVehiclesService {
  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo
  ) { }
  async execute(id: string): Promise<Vehicle> {
    const result = await this.vehicleRepo.findById(id)
    return result
  }
}
