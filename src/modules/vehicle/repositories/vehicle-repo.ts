import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { IVehicleRepo } from "./vehicle-repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Vehicle } from "../domain/vehicle";
import { VehicleMapper } from "../mappers/vehicle-mappers";

@Injectable()
export class VehicleRepo implements IVehicleRepo {
  constructor(private readonly prisma: PrismaService) { }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    try {
      // Verifica se o company_id existe
      const companyExists = await this.prisma.company.findUnique({
        where: { id: vehicle.company_id },
      });

      if (!companyExists) {
        throw new Error(`Company with ID '${vehicle.company_id}' not found.`);
      }

      // Cria o veículo
      const result = await this.prisma.vehicle.create({
        data: {
          model: vehicle.model,
          brand: vehicle.brand,
          kilometers: vehicle.kilometers,
          license_plate: vehicle.license_plate,
          type_of_fuel: vehicle.type_of_fuel,
          year: vehicle.year,
          company: {
            connect: { id: vehicle.company_id },
          },
        },
      });

      return VehicleMapper.toDomain(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
  async findAll(): Promise<{ total: number; data: Vehicle[] }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.vehicle.count(),
      this.prisma.vehicle.findMany({ include: { company: true } })
    ])
    return { total, data: data.map((e) => VehicleMapper.toDomain(e)) }
  }

  async findById(id: string): Promise<Vehicle> {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id },
      include: { company: true }
    })
    if (!vehicle) {
      return
    }
    return VehicleMapper.toDomain(vehicle)
  }
}