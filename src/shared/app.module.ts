import { Module } from '@nestjs/common';
import { AccountModule } from 'src/modules/account.module';

import { CompaniesModule } from 'src/modules/companies.module';

@Module({
  imports: [CompaniesModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
