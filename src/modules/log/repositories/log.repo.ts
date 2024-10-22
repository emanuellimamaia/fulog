import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { ILogRepo } from "./log.repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Log } from "../domain/logs";
import { LogMapper } from "../mappers/log.mappers";
import { EntityMetadata } from "src/shared/entity";

@Injectable()
export class LogRepo implements ILogRepo {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<{ total: number, data: Log[] }> {
    try {
      const [total, data] = await this.prisma.$transaction([
        this.prisma.log.count(),
        this.prisma.log.findMany()

      ])
      return { total, data: data.map(LogMapper.toDomain) }
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
  async create(log: Log): Promise<Log> {
    try {
      const result = await this.prisma.log.create({
        data: {
          initial_kilometers: log.initialKilometers,
          account: {
            connect: {
              id: log.accountId
            }
          },
          company: {
            connect: {
              id: log.companyId
            }
          },
          vehicle: {
            connect: {
              id: log.vehicleId
            }
          }
        }
      })
      return LogMapper.toDomain(result)
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error)
      })
    }
  }

}