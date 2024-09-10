import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { AccountDto } from "../dto/account.dto";

export class AccountMapper {
  static toDomain(raw: AccountClient): Account {
    return Account.create({
      role: raw.role,
      username: raw.username,
      id: raw.id,
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