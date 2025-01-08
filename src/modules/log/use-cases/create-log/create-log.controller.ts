import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateLogService } from './create-log.service';
import { CreateLogDto } from '../../dto/create-log';
import { LogMapper } from '../../mappers/log.mappers';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';

@ApiTags('Log')
@Controller('log')
export class CreateLogController {
  constructor(private readonly createLogService: CreateLogService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post(':vehicleId')
  async handle(@Param('vehicleId') vehicleId: string, @Req() req) {
    const companyId = req.user.company.id
    const accountId = req.user.id
    const result = await this.createLogService.execute({
      vehicleId,
      companyId,
      accountId,
    })
    return { ...result, data: LogMapper.toDto(result.data) }
  }
}
