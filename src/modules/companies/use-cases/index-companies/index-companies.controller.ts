import { Controller, Get } from "@nestjs/common";
import { IndexCompaniesService } from "./index-companies.service";


@Controller('/companies')
export class IndexCompaniesController {
  constructor(
    private readonly indexCompaniesService: IndexCompaniesService
  ) { }

  @Get()
  async handle() {
    return this.indexCompaniesService.execute({})
  }
}