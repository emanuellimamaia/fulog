import { Injectable } from "@nestjs/common";
import { IVehicleRepo } from "./vehicle-repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Vehicle } from "../domain/vehicle";
import { VehicleMapper } from "../mappers/vehicle-mappers";

@Injectable()
export class VehicleRepo implements IVehicleRepo {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<{ total: number; data: Vehicle[] }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.vehicle.count(),
      this.prisma.vehicle.findMany({ include: { company: true } })
    ])
    return { total, data: data.map((e) => VehicleMapper.toDomain(e)) }
  }
}