import { Controller, Get } from "@nestjs/common";
import { IndexVehiclesService } from "./index-vehicles.service";
import { VehicleMapper } from "../../mappers/vehicle-mappers";

@Controller('/vehicles')
export class IndexVehicleController {
  constructor(
    private readonly indexVehicleService: IndexVehiclesService
  ) { }

  @Get()
  async handle() {
    const result = await this.indexVehicleService.execute({})
    return { ...result, data: result.data.map(VehicleMapper.toDto) }
  }
}