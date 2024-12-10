import { Inject, Injectable } from "@nestjs/common";
import { Account } from "src/modules/account/domain/account.entity";
import { ICompanyRepo } from "../../repositories/company.repo.interface";
import { Company } from "../../domain/company";
import { UseCase } from "src/shared/use-case";



type Input = {
  id: string
}

type NotFoundCompanytError = {
  message: 'empresa não encontrado'
}
type ShowCompanySuccess = {
  message: 'empresa encontrada'
  data: Company
}
type Result = NotFoundCompanytError | ShowCompanySuccess
@Injectable()
export class ShowCompaniesService implements UseCase<Input, Result> {
  constructor(
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo) { }

  async execute(input: Input): Promise<Result> {
    const result = await this.companyRepo.findById(input.id)
    if (!result) {
      return {
        message: 'empresa não encontrado'
      }
    }
    return {
      data: result,
      message: 'empresa encontrada'
    }
  }
}