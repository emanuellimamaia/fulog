import { Controller, Get } from "@nestjs/common";
import { IndexAccountsService } from "./index-accounts.service";

@Controller('/accounts')
export class IndexAccountController {
  constructor(
    private readonly indexAccountService: IndexAccountsService
  ) { }

  @Get()
  async handle() {
    return this.indexAccountService.execute({})
  }
}