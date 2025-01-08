import { Module } from "@nestjs/common";
import { IndexAccountController } from "./account/use-cases/index-accounts/index-accounts.controller";
import { IndexAccountsService } from "./account/use-cases/index-accounts/index-accounts.service";
import { ShowAccountsController } from "./account/use-cases/show-accounts/show-accounts.controller";
import { ShowAccountsService } from "./account/use-cases/show-accounts/show-accounts.service";
import { AccountRepo } from "./account/repositories/account.repo";
import { DatabaseModule } from "src/infra/database.module";
import { CreateAccountController } from "./account/use-cases/create-account/create-account.controller";
import { CreateAccountService } from "./account/use-cases/create-account/create-account.service";

import { GetByEmailService } from './account/use-cases/get-by-email/get-by-email.service';
import { GetMeController } from "./account/use-cases/get-me/get-me.controller";
import { AuthService } from "./auth/auth.service";
import { LocalStrategy } from "./auth/local.strategy";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/jwt.strategy";
import { AuthController } from "./auth/auth.controller";
import { JWT_SECRET } from "src/shared/global.constants";
import { ChangeStatusAccountService } from './account/use-cases/change-status-account/change-status-account.service';
import { ChangeStatusAccountController } from './account/use-cases/change-status-account/change-status-account.controller';




@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    AuthController,
    IndexAccountController,
    ShowAccountsController,
    CreateAccountController,
    GetMeController,
    ChangeStatusAccountController,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtService,
    JwtStrategy,
    GetByEmailService,
    IndexAccountsService,
    ShowAccountsService,
    CreateAccountService,
    AccountRepo,
    { provide: 'IAccountRepo', useExisting: AccountRepo },
    ChangeStatusAccountService,

  ],
  exports: ['IAccountRepo', GetByEmailService, CreateAccountService],
})
export class AccountModule { }