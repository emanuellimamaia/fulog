import { Inject, Injectable } from '@nestjs/common';
import { IMaintenanceRepo } from '../../repositories/maintenance-repo.interface';
import { MaintenanceMappper } from '../../mappers/maintenance-mappers';

@Injectable()
export class GetVehicleMaintenancesService {
  constructor(
    @Inject('IMaintenance')
    private readonly maintenanceRepo: IMaintenanceRepo,
  ) { }

  async execute(vehicleId: string) {
    const maintenances = await this.maintenanceRepo.getById(vehicleId);
    return maintenances.map(MaintenanceMappper.toDto);
  }
} 