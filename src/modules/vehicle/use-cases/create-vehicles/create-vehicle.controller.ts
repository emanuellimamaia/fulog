import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { CreateVehicleService } from "./create-vehicle.service";
import { CreateVehicleDto } from "../../dto/create-vehicle.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { VehicleMapper } from "../../mappers/vehicle-mappers";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";

@ApiTags('Vehicle')
@Controller('vehicle')
export class CreateVehiclesController {
  constructor(private readonly createVehicleService: CreateVehicleService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  async handle(@Body() data: CreateVehicleDto, @Req() req) {
    const companyId = req.user.company.id
    const result = await this.createVehicleService.execute({
      ...data,
      companyId
    })
    return { ...result, data: VehicleMapper.toDto(result.data) }
  }
}