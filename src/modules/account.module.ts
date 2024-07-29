import { Module } from "@nestjs/common";
import { IndexAccountController } from "./use-cases/index-accounts/index-accounts.controller";
import { IndexAccountsService } from "./use-cases/index-accounts/index-accounts.service";
import { ShowAccountsController } from "./use-cases/show-accounts/show-accounts.controller";
import { ShowAccountsService } from "./use-cases/show-accounts/show-accounts.service";

@Module({
  imports: [],
  controllers: [IndexAccountController, ShowAccountsController],
  providers: [IndexAccountsService, ShowAccountsService]
})
export class AccountModule { }