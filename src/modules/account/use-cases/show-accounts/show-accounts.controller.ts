import { Controller, Get, Param } from "@nestjs/common";
import { ShowAccountsService } from "./show-accounts.service";

@Controller('/accounts')
export class ShowAccountsController {
  constructor(
    private readonly showAccountService: ShowAccountsService
  ) { }

  @Get('/id:')
  async handle(
    @Param('id') id: string
  ) {
    return this.showAccountService.execute(id)
  }
}