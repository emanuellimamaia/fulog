import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AnalysisService } from './analysis.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';


@ApiTags('Analysis')
@Controller('analysis')
export class AnalysisController {
  constructor(
    private readonly analysisService: AnalysisService
  ) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('')
  async handle(
    @Req() req
  ) {

    const companyId = req.user.company.id

    const result = await this.analysisService.execute(companyId)
    return result
  }
}
