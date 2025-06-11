import { Module } from '@nestjs/common';
import { IndexCompaniesController } from './companies/use-cases/index-companies/index-companies.controller';
import { IndexCompaniesService } from './companies/use-cases/index-companies/index-companies.service';
import { ShowCompaniesController } from './companies/use-cases/show-companies/show-companies.controller';
import { ShowCompaniesService } from './companies/use-cases/show-companies/show-companies.service';
import { DatabaseModule } from 'src/infra/database.module';
import { CompanyRepo } from './companies/repositories/company.repo';
import { CreateCompanyController } from './companies/use-cases/create-company/create-company.controller';
import { CreateCompanyService } from './companies/use-cases/create-company/create-company.service';
import { CreateAccountService } from './account/use-cases/create-account/create-account.service';
import { AccountModule } from './account.module';
import { AnalysisService } from './companies/use-cases/analysis/analysis.service';
import { AnalysisController } from './companies/use-cases/analysis/analysis.controller';

@Module({
  imports: [DatabaseModule, AccountModule],
  controllers: [ShowCompaniesController, CreateCompanyController, AnalysisController],
  providers: [IndexCompaniesService, ShowCompaniesService, CompanyRepo,
    { provide: 'ICompanyRepo', useExisting: CompanyRepo }, CreateCompanyService, CreateAccountService, AnalysisService],
})
export class CompaniesModule { }
