import { PrismaService } from "src/infra/prisma/prisma.service";
import { ICompanyRepo } from "./company.repo.interface";
import { Company } from "../domain/company";
import { CompanyMapper } from "../mappers/company.mappers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CompanyRepo implements ICompanyRepo {
  constructor(private readonly prisma: PrismaService) { }
  async findAll(): Promise<{ total: number; data: Company[]; }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.company.count(),// contar todos as company
      this.prisma.company.findMany(), // mostrar todas as company
    ])
    return { total, data: data.map((c) => CompanyMapper.toDomain(c)) }
  }
}