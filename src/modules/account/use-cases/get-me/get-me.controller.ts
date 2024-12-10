import { Controller, Get, NotFoundException, Param, Req, UseGuards } from "@nestjs/common";
import { ShowAccountsService } from "../show-accounts/show-accounts.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AccountMapper } from "../../mappers/account.mappers";

@ApiTags('Account')
@Controller('/account')
export class GetMeController {

  constructor(private readonly showAccountService: ShowAccountsService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/me')
  async handle(@Req() req) {
    const result = await this.showAccountService.execute({ id: req.user.id })
    switch (result.message) {
      case 'usuário não encontrado':
        throw new NotFoundException(result)
      case 'Usuário encontrado':
        return { ...result, data: AccountMapper.toDto(result.data) }
    }
  }
}