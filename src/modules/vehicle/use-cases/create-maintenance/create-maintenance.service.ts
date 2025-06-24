import { Inject, Injectable } from '@nestjs/common';
import { IMaintenanceRepo } from '../../repositories/maintenance-repo.interface';
import { CreateMaintenanceDto } from '../../dto/create-maintenance.dto';
import { MainTenance } from '../../domain/maintenance.entity';
import { MaintenanceMappper } from '../../mappers/maintenance-mappers';

interface InputProps extends CreateMaintenanceDto {
  vehicleId: string
}

@Injectable()
export class CreateMaintenanceService {
  constructor(
    @Inject('IMaintenance')
    private readonly maintenanceRepo: IMaintenanceRepo,
  ) { }

  async execute(input: InputProps) {
    const maintenance = await MainTenance.create({
      date: input.date,
      name: input.name,
      value: input.value,
      vehicleId: input.vehicleId
    })
    const data = await this.maintenanceRepo.create(maintenance)
    return {
      message: "Maintenance sucess",
      data: MaintenanceMappper.toDto(data)
    }
  }
}
