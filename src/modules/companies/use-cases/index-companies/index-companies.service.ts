import { Inject, Injectable } from "@nestjs/common";
import { Company } from "../../domain/company.entity";
import { ICompanyRepo } from "../../repositories/company.repo.interface";
import { UseCase } from "src/shared/use-case";
type Input = {
}

type Result = {
  total: number,
  data: Company[]
}
@Injectable()
export class IndexCompaniesService implements UseCase<Input, Result> {
  constructor(
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo) { }
  async execute(input: Input): Promise<Result> {
    const result = await this.companyRepo.findAll()
    return result
  }
}