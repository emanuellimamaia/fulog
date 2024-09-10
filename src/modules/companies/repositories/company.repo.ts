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
      this.prisma.company.count(),
      this.prisma.company.findMany(),
    ])
    return { total, data: data.map((c) => CompanyMapper.toDomain(c)) }
  }
  async create(company: Company): Promise<Company> {
    const result = await this.prisma.company.create({
      data: {
        cnpj: company.cnpj,
        company_name: company.company_name,
        area: company.area
      }
    })
    return CompanyMapper.toDomain(result)
  }
}