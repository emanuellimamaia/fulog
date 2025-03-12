import { Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { IndexFuelExpensesService } from "./index-fuel-expenses.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { FuelExpensesMapper } from "../../mappers/fuel-expenses.mappers";

@ApiTags('Fuel expenses')
@Controller('fuel-expenses')
export class IndexFuelExpensesController {
  constructor(private readonly indexFuelExpensesService: IndexFuelExpensesService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':vehicleId')

  async handle(@Param('vehicleId') vehicleId: string) {
    const result = await this.indexFuelExpensesService.execute({ vehicleId })
    return { ...result, data: result.data.map(FuelExpensesMapper.toDto) }
  }
}