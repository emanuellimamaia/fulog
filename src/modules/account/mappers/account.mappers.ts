import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { AccountDto } from "../dto/account.dto";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";


export class AccountMapper {
  static toDomain(raw: AccountClient & { company?: CompanyClient }): Account {
    return Account.create({
      role: raw.role,
      username: raw.username,
      id: raw.id,
      email: raw.email,
      password: raw.password,
      company: raw.company && CompanyMapper.toDomain(raw.company),
    },
      {
        id: raw.id,
        created_at: raw.created_at,
        updated_at: raw.updated_at
      })
  }

  static toDto(account: Account): AccountDto {
    return {
      id: account.id,
      role: account.role,
      username: account.username,
      email: account.email,
      company: account.company && CompanyMapper.toDto(account.company)
    }
  }
}