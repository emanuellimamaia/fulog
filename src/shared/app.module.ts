import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';

import { AccountModule } from 'src/modules/account.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CompaniesModule } from 'src/modules/companies.module';
import { LogsModule } from 'src/modules/logs.module';
import { VehicelModule } from 'src/modules/vehicle.modoule';
import { GLOBAL_CONFIG } from 'src/config/global.config';
import { FuelExpensesModule } from 'src/modules/fuel-expenses.module';

@Module({
  imports: [CompaniesModule, AccountModule, DatabaseModule, VehicelModule, LogsModule, FuelExpensesModule, ConfigModule.forRoot({ isGlobal: true, load: [() => GLOBAL_CONFIG] }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
