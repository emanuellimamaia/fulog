import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateAccountService } from "./create-account.service";
import { CreateAccountDto } from "../../dto/create-account.dto";

@ApiTags('Account')
@Controller('Account')
export class CreateAccountController {
  constructor(private readonly createAccountService: CreateAccountService) { }

  @Post()
  async handle(@Body() data: CreateAccountDto) {
    const result = await this.createAccountService.execute(data);
    return result;
  }
}