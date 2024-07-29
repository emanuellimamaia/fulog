import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma/database.module';
import { AccountModule } from 'src/modules/account.module';

import { CompaniesModule } from 'src/modules/companies.module';

@Module({
  imports: [CompaniesModule, AccountModule, PrismaService],
  controllers: [],
  providers: [],
})
export class AppModule { }
