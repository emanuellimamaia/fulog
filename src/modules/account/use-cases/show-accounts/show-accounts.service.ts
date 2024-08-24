import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepo } from '../../repositories/account-repo.interface';
import { UseCase } from 'src/shared/use-case';
import { Account } from '../../domain/account';
type Input = {
  id: string
}
type NotFoundAccountError = {
  message: 'usuário não encontrado'
}


type ShowAccountSuccess = {
  message: 'usuário encontrado'
  data: Account
}
type Result = NotFoundAccountError | ShowAccountSuccess
@Injectable()
export class ShowAccountsService implements UseCase<Input, Result> {
  constructor(
    @Inject('IAccountRepo')
    private readonly accountRepo: IAccountRepo,
  ) { }

  async execute(input: Input): Promise<Result> {
    const result = await this.accountRepo.findById(input.id)
    if (!result) {
      return {
        message: 'usuário não encontrado'
      }
    }
    return {
      data: result,
      message: 'usuário encontrado',
    }
  }
}
