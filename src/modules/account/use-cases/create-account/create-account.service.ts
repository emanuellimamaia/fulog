import { Inject, Injectable } from "@nestjs/common";
import { Account } from "../../domain/account.entity";
import { CreateAccountDto } from "../../dto/create-account.dto";
import { UseCase } from "src/shared/use-case";
import { IAccountRepo } from "../../repositories/account-repo.interface";
import { Roles } from "src/shared/core/types.enum";
import * as bcrypt from 'bcrypt';

type Input = CreateAccountDto & {
  companyId: string,

}

type Result = {
  type: 'CreateAccountSucess'
  data: Account
}


@Injectable()
export class CreateAccountService implements UseCase<Input, Result> {
  constructor(
    @Inject('IAccountRepo')
    private readonly AccountRepo: IAccountRepo,

  ) { }

  async execute(input: Input): Promise<Result> {

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const account = Account.create({
      role: Roles.EMPLOYEE,
      username: input.username,
      companyId: input.companyId,
      email: input.email,
      password: hashedPassword
    })


    const data = await this.AccountRepo.create(account)
    return { type: 'CreateAccountSucess', data }
  }
}