import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompanyService } from './create-company.service';
import { CreateCompanyDto } from '../../dto/create-company.dto';
import { ApiTags } from '@nestjs/swagger';
import { CompanyMapper } from '../../mappers/company.mappers';

@ApiTags('Companies')
@Controller('/company')
export class CreateCompanyController {
  constructor(
    private readonly createCompaniesService: CreateCompanyService
  ) { }
  @Post()
  async handle(
    @Body()
    data: CreateCompanyDto
  ) {
    const result = await this.createCompaniesService.execute(data)
    return { ...result, data: CompanyMapper.toDto(result.data) }
  }
}
