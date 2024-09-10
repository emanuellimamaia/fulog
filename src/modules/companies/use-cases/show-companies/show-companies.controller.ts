import { Controller, Get, Param } from "@nestjs/common";
import { ShowCompaniesService } from "./show-companies.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Companies')
@Controller('/companies')
export class ShowCompaniesController {
  constructor(
    private readonly showCompaniesController: ShowCompaniesService
  ) { }

  @Get('/:id')
  async handle(
    @Param('id') id: string
  ) {
    return this.showCompaniesController.execute(id)
  }
}
