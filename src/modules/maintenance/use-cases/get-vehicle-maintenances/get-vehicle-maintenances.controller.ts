import { Controller, Get, Param } from '@nestjs/common';
import { GetVehicleMaintenancesService } from './get-vehicle-maintenances.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Maintenance")
@Controller('maintenance/vehicle')
export class GetVehicleMaintenancesController {
  constructor(private readonly getVehicleMaintenancesService: GetVehicleMaintenancesService) { }

  @Get(':vehicleId')
  async findByVehicle(@Param('vehicleId') vehicleId: string) {
    return this.getVehicleMaintenancesService.execute(vehicleId);
  }
} 