import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { IVehicleRepo } from "./vehicle-repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Vehicle } from "../domain/vehicle.entity";
import { VehicleMapper } from "../mappers/vehicle-mappers";

@Injectable()
export class VehicleRepo implements IVehicleRepo {
  constructor(private readonly prisma: PrismaService) { }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    try {

      const companyExists = await this.prisma.company.findUnique({
        where: { id: vehicle.company_id },
      });
      if (!companyExists) {
        throw new Error(`Company with ID '${vehicle.company_id}' not found.`);
      }

      const vehicleExists = await this.prisma.vehicle.findFirst({
        where: { license_plate: vehicle.license_plate }
      })
      if (vehicleExists) {
        throw new Error(`Vehicle with license plate '${vehicle.license_plate}' already exists.`)
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
  async findAll(companyId: string): Promise<{ total: number; data: Vehicle[] }> {

    const [total, data] = await this.prisma.$transaction([
      this.prisma.vehicle.count(),
      this.prisma.vehicle.findMany({ where: { company_id: companyId }, include: { company: true, logs: true } }),

    ])
    return { total, data: data.map((e) => VehicleMapper.toDomain(e)) }
  }

  async findById(id: string): Promise<Vehicle> {
    try {
      const vehicle = await this.prisma.vehicle.findUnique({
        where: { id },
        include: { company: true }
      })

      return VehicleMapper.toDomain(vehicle)
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }

  async updateKilometers(id: string, kilometers: number): Promise<Vehicle> {
    try {
      const result = await this.prisma.vehicle.update({
        where: { id },
        data: { kilometers },
      })
      return VehicleMapper.toDomain(result)
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
  async changeAvailability(id: string, availability: string): Promise<Vehicle> {
    try {
      const result = await this.prisma.vehicle.update({
        where: { id },
        data: { availability },
      });
      return VehicleMapper.toDomain(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }

}