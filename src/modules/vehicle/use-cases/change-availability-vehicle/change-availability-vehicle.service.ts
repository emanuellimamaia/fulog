import { Inject, Injectable } from '@nestjs/common';
import { IVehicleRepo } from '../../repositories/vehicle-repo.interface';
import { Vehicle } from '@prisma/client';

@Injectable()
export class ChangeAvailabilityVehicleService {
  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo
  ) { }

  async updateAVailability(id: string, availability: string): Promise<Vehicle> {
    const result = await this.vehicleRepo.changeAvailability(id, availability)
    return result
  }
}
