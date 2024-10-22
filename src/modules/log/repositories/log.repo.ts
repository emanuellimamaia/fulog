import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { ILogRepo } from "./log.repo.interface";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Log } from "../domain/logs";
import { LogMapper } from "../mappers/log.mappers";

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


}