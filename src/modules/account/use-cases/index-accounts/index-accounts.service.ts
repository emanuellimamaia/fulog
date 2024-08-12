import { Inject, Injectable } from "@nestjs/common";
import { IAccountRepo } from "../../repositories/account-repo.interface";
import { Account } from "../../domain/account";
import { UseCase } from "src/shared/use-case";
type Input = {
}
type Result = {
  total: number,
  data: Account[]
}

@Injectable()
export class IndexAccountsService implements UseCase<Input, Result> {
  constructor(
    @Inject('IAccountRepo')
    private readonly accountRepo: IAccountRepo) {
  }
  async execute(input: Input): Promise<Result> {
    const result = await this.accountRepo.findAll()
    return result
  }
}