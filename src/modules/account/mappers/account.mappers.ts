import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";
import { AccountDto } from "../dto/account.dto";

export class AccountMapper {
  static toDomain(raw: AccountClient & { company: CompanyClient }): Account {
    return Account.create({
      company: raw.company && CompanyMapper.toDomain(raw.company),
      role: raw.role,
      username: raw.username
    })
  }
  static toDto(account: Account): AccountDto {
    return {
      id: account.id,
      role: account.role,
      username: account.username

    }
  }
}