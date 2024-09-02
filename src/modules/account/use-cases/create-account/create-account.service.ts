import { Inject, Injectable } from "@nestjs/common";
import { Account } from "../../domain/account";
import { CreateAccountDto } from "../../dto/create-account.dto";
import { UseCase } from "src/shared/use-case";
import { IAccountRepo } from "../../repositories/account-repo.interface";


type Input = CreateAccountDto & {
  companyId: string
}

type Result = {
  type: 'CreateAccountSucess'
  data: Account
}

@Injectable()
export class CreateAccountService implements UseCase<Input, Result> {
  constructor(
    @Inject('IAccountRepo')
    private readonly AccountRepo: IAccountRepo
  ) { }

  async execute(input: CreateAccountDto): Promise<Result> {
    const account = Account.create({
      role: input.role,
      username: input.username,
      companyId: input.company_id,
    })
    const data = await this.AccountRepo.create(account)
    return { type: 'CreateAccountSucess', data }
  }
}