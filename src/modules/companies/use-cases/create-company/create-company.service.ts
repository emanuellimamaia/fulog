import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../../dto/create-company.dto';
import { Company } from '../../domain/company';
import { UseCase } from 'src/shared/use-case';
import { ICompanyRepo } from '../../repositories/company.repo.interface';

type Input = CreateCompanyDto
type Result = {
  type: 'CreateSuccessCompany '
  data: Company
}
@Injectable()
export class CreateCompanyService implements UseCase<Input, Result> {
  constructor(
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo
  ) { }
  async execute(input: CreateCompanyDto): Promise<Result> {
    const company = Company.create({
      cnpj: input.cnpj,
      company_name: input.company_name,
      area: input.area
    })
    console.log(company)
    const data = await this.companyRepo.create(company)
    return { type: 'CreateSuccessCompany ', data }
  }
}
