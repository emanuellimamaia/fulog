import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ShowAccountsService } from "./show-accounts.service";
import { AccountMapper } from "../../mappers/account.mappers";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Account')
@Controller('/accounts')
export class ShowAccountsController {
  constructor(
    private readonly showAccountService: ShowAccountsService
  ) { }

  @Get('/:id')
  async handle(
    @Param('id') id: string
  ) {
    const result = await this.showAccountService.execute({ id })
    switch (result.message) {
      case 'usuário não encontrado':
        throw new NotFoundException(result)
      case 'usuário encontrado':
        return { ...result, data: AccountMapper.toDto(result.data) }
    }
  }
}