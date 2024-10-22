import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLogService } from './create-log.service';
import { CreateLogDto } from '../../dto/create-log';
import { LogMapper } from '../../mappers/log.mappers';

@ApiTags('Log')
@Controller('log')
export class CreateLogController {
  constructor(private readonly createLogService: CreateLogService) { }

  @Post()
  async handle(@Body() data: CreateLogDto) {
    const result = await this.createLogService.execute(data)
    return { ...result, data: LogMapper.toDto(result.data) }
  }
}
