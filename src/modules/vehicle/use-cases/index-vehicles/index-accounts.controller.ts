import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { IndexVehiclesService } from "./index-vehicles.service";
import { VehicleMapper } from "../../mappers/vehicle-mappers";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
@ApiTags('Vehicle')
@Controller('/vehicles')
export class IndexVehicleController {
  constructor(
    private readonly indexVehicleService: IndexVehiclesService
  ) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async handle(@Req() req) {
    const companyId = req.user.company.id
    const result = await this.indexVehicleService.execute({
      companyId
    })
    return { ...result, data: result.data.map(VehicleMapper.toDto) }
  }
}