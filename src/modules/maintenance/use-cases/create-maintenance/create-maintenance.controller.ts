import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateMaintenanceService } from './create-maintenance.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { CreateMaintenanceDto } from '../../dto/create-maintenance.dto';



@ApiTags("Maintenance")
@Controller('maintenance')
export class CreateMaintenanceController {
  constructor(private readonly createMaintenanceService: CreateMaintenanceService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post(':vehicleId')
  async handle(@Param('vehicleId') vehicleId: string, @Body() body: CreateMaintenanceDto) {
    const result = await this.createMaintenanceService.execute({
      date: body.date,
      name: body.name,
      value: body.value,
      vehicleId: vehicleId
    })

    return result
  }
}
