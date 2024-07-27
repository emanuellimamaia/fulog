import { Module } from '@nestjs/common';
import { IndexCompaniesController } from './companies/use-cases/index-companies/index-companies.controller';
import { IndexCompaniesService } from './companies/use-cases/index-companies/index-companies.service';
import { ShowCompaniesController } from './companies/use-cases/show-companies/show-companies.controller';
import { ShowCompaniesService } from './companies/use-cases/show-companies/show-companies.service';

@Module({
  imports: [],
  controllers: [IndexCompaniesController, ShowCompaniesController],
  providers: [IndexCompaniesService, ShowCompaniesService],
})
export class CompaniesModule { }
