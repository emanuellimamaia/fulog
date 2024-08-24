import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompanyService } from './create-company.service';
import { CreateCompanyDto } from '../../dto/create-company.dto';

@Controller('/companies')
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
    return result
  }
}
