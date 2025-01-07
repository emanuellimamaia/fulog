import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { IndexAccountsService } from "./index-accounts.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AccountMapper } from "../../mappers/account.mappers";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
@ApiTags('Account')
@Controller('/accounts')
export class IndexAccountController {
  constructor(
    private readonly indexAccountService: IndexAccountsService
  ) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async handle(@Req() req) {
    const companyId = req.user.company.id
    const result = await this.indexAccountService.execute({ companyId })
    return { ...result, data: result.data.map(AccountMapper.toDto) }
  }
}