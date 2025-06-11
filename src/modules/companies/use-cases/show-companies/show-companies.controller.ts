import { Controller, Get, NotFoundException, Param, Req, UseGuards } from "@nestjs/common";
import { ShowCompaniesService } from "./show-companies.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CompanyMapper } from "../../mappers/company.mappers";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";

@ApiTags('Company')
@Controller('/company')
export class ShowCompaniesController {
  constructor(
    private readonly showCompaniesService: ShowCompaniesService
  ) { }


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('')
  async handle(
    @Req() req
  ) {

    const companyId = req.user.company.id
    const result = await this.showCompaniesService.execute({ id: companyId })
    switch (result.message) {
      case 'empresa encontrada':
        return { ...result, data: CompanyMapper.toDto(result.data) }
      case 'empresa não encontrado':
        throw new NotFoundException(result)
    }
  }
}
