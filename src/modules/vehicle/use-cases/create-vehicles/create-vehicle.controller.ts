import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateVehicleService } from "./create-vehicle.service";
import { CreateVehicleDto } from "../../dto/create-vehicle.dto";
import { ApiTags } from "@nestjs/swagger";
import { VehicleMapper } from "../../mappers/vehicle-mappers";

@ApiTags('Vehicle')
@Controller('vehicle')
export class CreateVehiclesController {
  constructor(private readonly createVehicleService: CreateVehicleService) { }

  @Post()
  async handle(@Body() data: CreateVehicleDto) {
    const result = await this.createVehicleService.execute(data)
    return { ...result, data: VehicleMapper.toDto(result.data) }
  }
}