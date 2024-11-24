import { Module } from "@nestjs/common";
import { IndexAccountController } from "./account/use-cases/index-accounts/index-accounts.controller";
import { IndexAccountsService } from "./account/use-cases/index-accounts/index-accounts.service";
import { ShowAccountsController } from "./account/use-cases/show-accounts/show-accounts.controller";
import { ShowAccountsService } from "./account/use-cases/show-accounts/show-accounts.service";
import { AccountRepo } from "./account/repositories/account.repo";
import { DatabaseModule } from "src/infra/database.module";
import { CreateAccountController } from "./account/use-cases/create-account/create-account.controller";
import { CreateAccountService } from "./account/use-cases/create-account/create-account.service";
import { AuthModule } from './auth/auth.module';
import { GetByEmailService } from './account/use-cases/get-by-email/get-by-email.service';
@Module({
  imports: [DatabaseModule],
  controllers: [IndexAccountController, ShowAccountsController, CreateAccountController],
  providers: [IndexAccountsService, ShowAccountsService, AccountRepo, { provide: 'IAccountRepo', useExisting: AccountRepo }, CreateAccountService, GetByEmailService],
  exports: ['IAccountRepo'],
})
export class AccountModule { }