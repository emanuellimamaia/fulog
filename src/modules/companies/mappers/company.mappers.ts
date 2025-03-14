import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Company } from "../domain/company.entity";
import { CompanyDto } from "../dto/company.dto";

export class CompanyMapper {
  static toDomain(raw: CompanyClient) {
    return Company.create({
      id: raw.id,
      company_name: raw.company_name

    }, { created_at: raw.created_at, id: raw.id, updated_at: raw.updated_at })
  }
  static toDto(company: Company): CompanyDto {

    return {
      id: company.id,
      company_name: company.company_name,
      created_at: company.created_at,
      updated_at: company.updated_at,
    }
  }
}