import { Module } from "@nestjs/common";
import { IndexAccountController } from "./account/use-cases/index-accounts/index-accounts.controller";
import { IndexAccountsService } from "./account/use-cases/index-accounts/index-accounts.service";
import { ShowAccountsController } from "./account/use-cases/show-accounts/show-accounts.controller";
import { ShowAccountsService } from "./account/use-cases/show-accounts/show-accounts.service";
import { AccountRepo } from "./account/repositories/account.repo";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { DatabaseModule } from "src/infra/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [IndexAccountController, ShowAccountsController],
  providers: [IndexAccountsService, ShowAccountsService, AccountRepo, { provide: 'IAccountRepo', useExisting: AccountRepo }]
})
export class AccountModule { }