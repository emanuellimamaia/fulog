import { Controller, Get, Param } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { ShowVehiclesService } from "./show-vehicles.service"
import { VehicleMapper } from "../../mappers/vehicle-mappers"

@ApiTags('Vehicle')
@Controller('/vehicles')
export class ShowVehicleController {
  constructor(
    private readonly showVehiclesService: ShowVehiclesService
  ) { }

  @Get(':id')
  async handle(@Param('id') id: string) {
    const result = await this.showVehiclesService.execute(id)
    return { ...result }
  }
}