import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { AccountDto } from "../dto/account.dto";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";

export class AccountMapper {
  static toDomain(raw: AccountClient & { company: CompanyClient }): Account {
    return Account.create({
      role: raw.role,
      username: raw.username,
      id: raw.id,
      company: raw.company && CompanyMapper.toDomain(raw.company),
    })
  }

  static toDto(account: Account): AccountDto {
    return {
      id: account.id,
      role: account.role,
      username: account.username,
      company: account.company && CompanyMapper.toDto(account.company)
    }
  }
}