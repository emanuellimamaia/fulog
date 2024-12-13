import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateAccountService } from "./create-account.service";
import { CreateAccountDto } from "../../dto/create-account.dto";
import { AccountMapper } from "../../mappers/account.mappers";
import { Roles } from "src/shared/core/types.enum";

@ApiTags('Account')
@Controller('account')
export class CreateAccountController {
  constructor(private readonly createAccountService: CreateAccountService) { }

  @Post()
  async handle(@Body() data: CreateAccountDto, @Param('companyId') id: string) {
    const result = await this.createAccountService.execute({
      ...data,
      role: Roles.EMPLOYEE,
      companyId: id
    });
    return { ...result, data: AccountMapper.toDto(result.data) };
  }
}