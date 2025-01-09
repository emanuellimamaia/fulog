import { Body, Controller, Param, Patch, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FinishLogService } from './finish-log.service';
import { FinishLogDto } from '../../dto/finish-log';

@ApiTags('Log')
@Controller('finish-log')
export class FinishLogController {
  constructor(private readonly finishLogService: FinishLogService) { }

  @Patch(':logId')
  async handle(@Param('logId') logId: string, @Req() req, @Body() body: FinishLogDto) {
    const result = await this.finishLogService.execute({
      logId,
      final_kilometers: body.final_kilometers,
      notes: body.notes
    })
    return { ...result, data: result.data }
  }
}
