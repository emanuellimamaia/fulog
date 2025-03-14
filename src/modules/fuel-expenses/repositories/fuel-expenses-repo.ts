import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { FuelExpenses } from "../domain/fuel-expenses.entity";
import { FuelExpensesMapper } from "../mappers/fuel-expenses.mappers";
import { VehicleMapper } from "src/modules/vehicle/mappers/vehicle-mappers";

@Injectable()
export class FuelExpensesRepo {
  constructor(private readonly prisma: PrismaService) { }
  async create(fuelExpenses: FuelExpenses): Promise<FuelExpenses> {
    try {
      const result = await this.prisma.fuelExpenses.create({
        data: {
          amount: fuelExpenses.amount,
          liters: fuelExpenses.liters,
          price_per_liter: fuelExpenses.price_per_liter,
          vehicle: {
            connect: {
              id: fuelExpenses.vehicleId
            }
          }
        }
      })
      return FuelExpensesMapper.toDomain(result)
    } catch (error) {

    }
  }

  async findAll(vehicleId: string) {
    try {
      const [total, data] = await this.prisma.$transaction([
        this.prisma.fuelExpenses.count(),
        this.prisma.fuelExpenses.findMany({ where: { vehicle_id: vehicleId }, include: { vehicle: true } }),
      ])
      return { total, data }

    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }

  }
}