import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";

export class AccountMapper {
  static toDomain(raw: AccountClient & { company: CompanyClient }): Account {
    return Account.create({
      company: raw.company && CompanyMapper.toDomain(raw.company),
      role: raw.role,
      username: raw.username
    })
  }
}