import { Body, Controller, Param, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateFuelExpensesService } from "./create-fuel-expenses.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { CreateFuelExpensesDto } from "../../dto/create-fuel-expenses.dto";
import { FuelExpensesMapper } from "../../mappers/fuel-expenses.mappers";

@ApiTags('Fuel expenses')
@Controller('fuel-expenses')
export class CreateFuelExpensesController {
  constructor(private readonly createFuelExpensesService: CreateFuelExpensesService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post(':vehicleId')
  async handle(@Param('vehicleId') vehicleId: string, @Body() body: CreateFuelExpensesDto) {

    const result = await this.createFuelExpensesService.execute({
      vehicleId,
      fuelExpenses: body
    })
    return { ...result, data: FuelExpensesMapper.toDto(result.data) }
  }
}