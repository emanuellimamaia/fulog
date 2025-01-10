import { Inject, Injectable } from '@nestjs/common';
import { IVehicleRepo } from '../../repositories/vehicle-repo.interface';
import { Vehicle } from '../../domain/vehicle.entity';

@Injectable()
export class UpdateKilometersService {

  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo
  ) { }
  async execute(id: string, kilometers: number): Promise<Vehicle> {
    const result = await this.vehicleRepo.updateKilometers(id, kilometers)
    return result
  }
}
