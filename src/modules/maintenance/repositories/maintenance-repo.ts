import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";

import { PrismaService } from "src/infra/prisma/prisma.service";
import { MainTenance } from "../domain/maintenance.entity";
import { MaintenanceMappper } from "../mappers/maintenance-mappers";
import { IMaintenanceRepo } from "./maintenance-repo.interface";

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

  async getById(vehicleId: string): Promise<MainTenance[]> {
    try {
      const results = await this.prisma.maintenance.findMany({
        where: { vehicleId },
      });
      return results.map(result => MaintenanceMappper.toDomain(result));
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
}