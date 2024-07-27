import { Module } from '@nestjs/common';
import { CompaniesModule } from 'src/modules/companies.module';

@Module({
  imports: [CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
