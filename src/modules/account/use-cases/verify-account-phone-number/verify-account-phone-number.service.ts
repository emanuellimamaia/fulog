import { Inject, Injectable } from '@nestjs/common';
import { IAccountRepo } from '../../repositories/account-repo.interface';
import { AccountMapper } from '../../mappers/account.mappers';

@Injectable()
export class VerifyAccountPhoneNumberService {
  constructor(
    @Inject('IAccountRepo')
    private readonly accountRepo: IAccountRepo,
  ) { }
  async execute(phoneNumber: string) {
    const result = await this.accountRepo.verifyPhoneNumber(phoneNumber)
    const account = AccountMapper.toDto(result)
    const log = account.logs[account.logs.length - 1]
    return {
      id: account.id,
      username: account.username,
      email: account.email,
      phoneNumber: account.phone_number,
      log: log
    }
  }
}
