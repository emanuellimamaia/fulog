import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { IMaintenanceRepo } from "./maintenance-repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { MainTenance } from "../domain/maintenance.entity";
import { MaintenanceMappper } from "../mappers/maintenance-mappers";

@Injectable()
export class MaintenanceRepo implements IMaintenanceRepo {
  constructor(private readonly prisma: PrismaService) { }

  async create(maintenance: MainTenance) {
    try {
      const result = await this.prisma.maintenance.create({
        data: {
          name: maintenance.name,
          value: maintenance.value,
          date: maintenance.date,
          Vehicle: {
            connect: {
              id: maintenance.vehicleId
            }
          }
        }
      })
      return MaintenanceMappper.toDomain(result)
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
}