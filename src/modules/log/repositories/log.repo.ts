import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { ILogRepo } from "./log.repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Log } from "../domain/logs.entity";
import { LogMapper } from "../mappers/log.mappers";
import { EntityMetadata } from "src/shared/entity";

@Injectable()
export class LogRepo implements ILogRepo {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<{ total: number, data: Log[] }> {
    try {
      const [total, data] = await this.prisma.$transaction([
        this.prisma.log.count(),
        this.prisma.log.findMany({ include: { account: true, company: true, vehicle: true } }),

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
          progress: log.progress,

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
  async findById(id: string): Promise<Log> {
    const log = await this.prisma.log.findUnique({
      where: { id },
    });
    if (!log) return null;
    return LogMapper.toDomain(log);
  }
  async finish(log: Log): Promise<Log> {
    try {
      const result = await this.prisma.log.update({
        where: { id: log.id },
        data: {
          final_kilometers: log.finalKilometers,
          delivered: log.delivered,
          notes: log.notes,
          progress: log.progress,
        },
      });
      return LogMapper.toDomain(result);
    } catch (error) {
      throw new InternalServerErrorException(error.message, {
        cause: new Error(error),
      });
    }
  }
}