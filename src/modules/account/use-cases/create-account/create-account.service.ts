import { Inject, Injectable } from "@nestjs/common";
import { Account } from "../../domain/account";
import { CreateAccountDto } from "../../dto/create-account.dto";
import { UseCase } from "src/shared/use-case";
import { IAccountRepo } from "../../repositories/account-repo.interface";
import { ICompanyRepo } from "src/modules/companies/repositories/company.repo.interface";
import { Company } from "src/modules/companies/domain/company";


type Input = CreateAccountDto & {
  companyId: string
}

type Result = {
  type: 'CreateAccountSucess'
  data: Account
}

type CompanyMustBeDefinedError = {
  success: false;
  status: 'CompanyMustBeDefined';
};

type CompanyNotFoundError = {
  success: false;
  status: 'CompanyNotFound';
};


@Injectable()
export class CreateAccountService implements UseCase<Input, Result> {
  constructor(
    @Inject('IAccountRepo')
    private readonly AccountRepo: IAccountRepo,

  ) { }

  async execute(input: CreateAccountDto): Promise<Result> {


    const account = Account.create({
      role: input.role,
      username: input.username,
      companyId: input.company_id

    })
    const data = await this.AccountRepo.create(account)
    return { type: 'CreateAccountSucess', data }
  }
}