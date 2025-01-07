import { Body, Controller, Param, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateAccountService } from "./create-account.service";
import { CreateAccountDto } from "../../dto/create-account.dto";
import { AccountMapper } from "../../mappers/account.mappers";
import { Roles } from "src/shared/core/types.enum";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";

@ApiTags('Account')
@Controller('account')
export class CreateAccountController {
  constructor(private readonly createAccountService: CreateAccountService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  async handle(@Body() data: CreateAccountDto, @Req() req) {
    const companyId = req.user.company.id
    const result = await this.createAccountService.execute({
      ...data,
      companyId: companyId
    });
    return { ...result, data: AccountMapper.toDto(result.data) };
  }
}