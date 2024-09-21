import { Account as AccountClient, Company as CompanyClient } from "@prisma/client";
import { Account } from "../domain/account";
import { AccountDto } from "../dto/account.dto";
import { Company } from "src/modules/companies/domain/company";
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

  /*   static toDomain(raw: AccountClient): Account {
     // Verifica se existe uma empresa associada e a transforma em uma instância de 'Company'
     const company = raw.company ? new Company({
       id: raw.company.id,
       companyName: raw.company.company_name,
       cnpj: raw.company.cnpj,
     }) : null;
 
     // Retorna uma nova instância da entidade Account com os dados brutos convertidos
     return Account.create({
       id: raw.id,
       username: raw.username,
       role: raw.role,
       companyId: raw.company_id,  // Associa a empresa ao ID da empresa
       company,  // Passa a instância da empresa, ou null se não houver
     });
   }  */
  static toDto(account: Account): AccountDto {
    return {
      id: account.id,
      role: account.role,
      username: account.username,
      company: account.company && CompanyMapper.toDto(account.company)
    }
  }
}