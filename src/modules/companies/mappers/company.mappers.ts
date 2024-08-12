import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Company } from "../domain/company";

export class CompanyMapper {
  static toDomain(raw: CompanyClient) {
    return Company.create({
      area: raw.area,
      cnpj: raw.cnpj,
      company_name: raw.company_name
    }, { created_at: raw.created_at, id: raw.id, updated_at: raw.updated_at })
  }
}