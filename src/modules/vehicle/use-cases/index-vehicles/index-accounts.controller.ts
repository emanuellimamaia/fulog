import { Controller, Get } from "@nestjs/common";
import { IndexVehiclesService } from "./index-vehicles.service";

@Controller('/vehicles')
export class IndexVehicleController {
  constructor(
    private readonly indexVehicleService: IndexVehiclesService
  ) { }

  @Get()
  async handle() {
    return this.indexVehicleService.execute({})
  }
}