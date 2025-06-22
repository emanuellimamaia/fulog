import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VerifyAccountPhoneNumberService } from './verify-account-phone-number.service';

@ApiTags('Account')
@Controller('/verify-account-phoneNumber')
export class VerifyAccountPhoneNumberController {
  constructor(
    private readonly verifyAccountPhoneNumberService: VerifyAccountPhoneNumberService
  ) { }

  @Get(':phoneNumber')
  async handle(@Param('phoneNumber') phoneNumber: string) {
    const result = await this.verifyAccountPhoneNumberService.execute(phoneNumber);
    return result
  }
}
