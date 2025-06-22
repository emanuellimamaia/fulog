import { Account as AccountClient, Company as CompanyClient, Log as LogClient } from "@prisma/client";
import { Account } from "../domain/account.entity";
import { AccountDto } from "../dto/account.dto";
import { CompanyMapper } from "src/modules/companies/mappers/company.mappers";
import { LogMapper } from "src/modules/log/mappers/log.mappers";


export class AccountMapper {
  static toDomain(raw: AccountClient & { company?: CompanyClient } & { logs?: LogClient[] }): Account {
    return Account.create({
      role: raw.role,
      username: raw.username,
      id: raw.id,
      email: raw.email,
      password: raw.password,
      status: raw.status,
      phoneNumber: raw.phoneNumber,
      company: raw.company && CompanyMapper.toDomain(raw.company),
      logs: raw.logs?.map(log => LogMapper.toDomain(log))
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
      status: account.status,
      email: account.email,
      phone_number: account.phoneNumber,
      company: account.company && CompanyMapper.toDto(account.company),
      logs: account.logs?.map(log => LogMapper.toDto(log))
    }
  }
}