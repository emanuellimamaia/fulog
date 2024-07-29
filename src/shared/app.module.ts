import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';

import { AccountModule } from 'src/modules/account.module';

import { CompaniesModule } from 'src/modules/companies.module';

@Module({
  imports: [CompaniesModule, AccountModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
