import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepo } from '../../repositories/account-repo.interface';


type Input = {
  email: string
}

@Injectable()
export class GetByEmailService {
  constructor(
    @Inject('IAccountRepo')
    private readonly accountRepo: IAccountRepo,
  ) { }
  async execute(input: Input) {
    const result = await this.accountRepo.findByEmail(input.email)
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

}
