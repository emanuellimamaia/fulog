import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Company } from "../domain/company";
import { CompanyDto } from "../dto/company.dto";

export class CompanyMapper {
  static toDomain(raw: CompanyClient) {
    return Company.create({
      area: raw.area,
      cnpj: raw.cnpj,
      company_name: raw.company_name
    }, { created_at: raw.created_at, id: raw.id, updated_at: raw.updated_at })
  }
  static toDto(company: Company): CompanyDto {

    return {
      id: company.id,
      area: company.area,
      cnpj: company.cnpj,
      company_name: company.company_name,
      created_at: company.created_at,
      updated_at: company.updated_at,
    }
  }
}