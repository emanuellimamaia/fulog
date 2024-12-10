import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepo } from '../../repositories/account-repo.interface';
import { UseCase } from 'src/shared/use-case';
import { Account } from '../../domain/account.entity';
type Input = {
  id: string
}
type NotFoundAccountError = {
  message: 'usuário não encontrado'
}


type ShowAccountSuccess = {
  message: 'Usuário encontrado'
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
    console.log('id recebido no serviço', input);
    const result = await this.accountRepo.findById(input.id)
    if (!result) {
      return {
        message: 'usuário não encontrado'
      }
    }
    return {
      data: result,
      message: 'Usuário encontrado',
    }
  }

  async getByEmail(input: Input) {
    const result = await this.getByEmail(input)
    if (!result) {
      return {
        message: 'usuário não encontrado'
      }
    }

    return result
  }
}
