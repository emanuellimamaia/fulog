import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IndexLogsService } from './index-logs.service';
import { LogMapper } from '../../mappers/log.mappers';

@ApiTags('Logs')
@Controller('/logs')
export class IndexLogsController {

  constructor(
    private readonly indexLogsService: IndexLogsService
  ) { }

  @Get()
  async handle() {
    const result = await this.indexLogsService.execute({})
    return { ...result, data: result.data.map(LogMapper.toDto) }
  }
}
