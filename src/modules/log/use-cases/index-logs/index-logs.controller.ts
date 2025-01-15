import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IndexLogsService } from './index-logs.service';
import { LogMapper } from '../../mappers/log.mappers';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';

@ApiTags('Log')
@Controller('/logs')
export class IndexLogsController {

  constructor(
    private readonly indexLogsService: IndexLogsService
  ) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async handle(@Req() req) {
    const result = await this.indexLogsService.execute({
      companyId: req.user.company.id
    })
    return { ...result, data: result.data.map(LogMapper.toDto) }
  }
}
