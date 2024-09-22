import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ShowCompaniesService } from "./show-companies.service";
import { ApiTags } from "@nestjs/swagger";
import { CompanyMapper } from "../../mappers/company.mappers";

@ApiTags('Companies')
@Controller('/companies')
export class ShowCompaniesController {
  constructor(
    private readonly showCompaniesService: ShowCompaniesService
  ) { }

  @Get('/:id')
  async handle(
    @Param('id') id: string
  ) {
    const result = await this.showCompaniesService.execute({ id })
    switch (result.message) {
      case 'empresa encontrada':
        return { ...result, data: CompanyMapper.toDto(result.data) }
      case 'empresa não encontrado':
        throw new NotFoundException(result)
    }
  }
}
