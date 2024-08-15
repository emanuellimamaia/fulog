import { Module } from '@nestjs/common';
import { IndexCompaniesController } from './companies/use-cases/index-companies/index-companies.controller';
import { IndexCompaniesService } from './companies/use-cases/index-companies/index-companies.service';
import { ShowCompaniesController } from './companies/use-cases/show-companies/show-companies.controller';
import { ShowCompaniesService } from './companies/use-cases/show-companies/show-companies.service';
import { DatabaseModule } from 'src/infra/database.module';
import { CompanyRepo } from './companies/repositories/company.repo';

@Module({
  imports: [DatabaseModule],
  controllers: [IndexCompaniesController, ShowCompaniesController],
  providers: [IndexCompaniesService, ShowCompaniesService, CompanyRepo, { provide: 'ICompanyRepo', useExisting: CompanyRepo }],
})
export class CompaniesModule { }
