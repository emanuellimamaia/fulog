import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepo } from '../../repositories/account-repo.interface';

@Injectable()
export class ChangeStatusAccountService {

  constructor(
    @Inject('IAccountRepo')
    private readonly accountRepo: IAccountRepo
  ) { }

  async execute(id: string, status: boolean) {
    const result = await this.accountRepo.changeStatus(id, status)
    return {
      data: result,
      message: 'Status atualizado com sucesso.',
    }
  }
}
