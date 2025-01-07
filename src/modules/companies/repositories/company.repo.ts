import { PrismaService } from "src/infra/prisma/prisma.service";
import { ICompanyRepo } from "./company.repo.interface";
import { Company } from "../domain/company.entity";
import { CompanyMapper } from "../mappers/company.mappers";
import { ConflictException, Injectable } from "@nestjs/common";
import { Roles } from "src/shared/core/types.enum";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
  async findById(id: string): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { vehicles: true }
    })
    if (!company) {
      return
    }

    return CompanyMapper.toDomain(company)
  }
  async create(company: Company, userInput: { username: string; email: string; password: string }): Promise<Company> {
    try {
      const result = await this.prisma.company.create({
        data: {
          company_name: company.company_name,
          accounts: {
            create: {
              username: userInput.username,
              email: userInput.email,
              password: userInput.password,
              role: Roles.ADMIN,
            },
          },
        },
        include: {
          accounts: true,
        },
      });
      return CompanyMapper.toDomain(result);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('Email já está em uso.');
      }
      throw error
    }

  }
}