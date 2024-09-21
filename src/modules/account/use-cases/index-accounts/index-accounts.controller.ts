import { Controller, Get } from "@nestjs/common";
import { IndexAccountsService } from "./index-accounts.service";
import { ApiTags } from "@nestjs/swagger";
import { AccountMapper } from "../../mappers/account.mappers";
@ApiTags('Account')
@Controller('/accounts')
export class IndexAccountController {
  constructor(
    private readonly indexAccountService: IndexAccountsService
  ) { }

  @Get()
  async handle() {
    const result = await this.indexAccountService.execute({})
    return { ...result, data: result.data.map(AccountMapper.toDto) }
  }
}