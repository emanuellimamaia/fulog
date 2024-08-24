import { Controller, Get } from "@nestjs/common";
import { IndexCompaniesService } from "./index-companies.service";
import { CompanyMapper } from "../../mappers/company.mappers";


@Controller('/companies')
export class IndexCompaniesController {
  constructor(
    private readonly indexCompaniesService: IndexCompaniesService
  ) { }

  @Get()
  async handle() {
    const result = await this.indexCompaniesService.execute({})
    return { ...result, data: result.data.map(CompanyMapper.toDto) }
  }
}