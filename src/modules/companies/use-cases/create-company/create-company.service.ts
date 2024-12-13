import { Inject, Injectable } from "@nestjs/common";
import { Company } from "../../domain/company.entity";
import { CreateCompanyDto } from "../../dto/create-company.dto";
import { UseCase } from "src/shared/use-case";
import { ICompanyRepo } from "../../repositories/company.repo.interface";
import * as bcrypt from 'bcrypt';

type Input = CreateCompanyDto;

type Result = {
  type: 'CreateSuccessCompany';
  data: Company;
};

@Injectable()
export class CreateCompanyService implements UseCase<Input, Result> {
  constructor(
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo,
  ) { }

  async execute(input: Input): Promise<Result> {
    const company = Company.create({
      company_name: input.company_name,
    });

    const hashedPassword = await bcrypt.hash(input.user.password, 10);
    const userInput = {
      username: input.user.username,
      email: input.user.email,
      password: hashedPassword,
    };


    const data = await this.companyRepo.create(company, userInput);

    return { type: 'CreateSuccessCompany', data };
  }
}
