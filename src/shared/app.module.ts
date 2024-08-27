import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';

import { AccountModule } from 'src/modules/account.module';

import { CompaniesModule } from 'src/modules/companies.module';
import { VehicelModule } from 'src/modules/vehicle.modoule';

@Module({
  imports: [CompaniesModule, AccountModule, DatabaseModule, VehicelModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
