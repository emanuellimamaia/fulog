import { Inject, Injectable } from '@nestjs/common';
import { ICompanyRepo } from '../../repositories/company.repo.interface';
import { Result } from '@prisma/client/runtime/library';


type AnalysisCompany = {
  logs: number
  vehicles: number
  accounts: number

}
@Injectable()
export class AnalysisService {
  constructor(
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo,
  ) { }

  async execute(companyId: string): Promise<AnalysisCompany> {

    const resultCompany = await this.companyRepo.findById(companyId)

    return {
      accounts: resultCompany.accounts.length,
      logs: resultCompany.logs.length,
      vehicles: resultCompany.vehicles.length

    }
  }
}
