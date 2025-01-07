import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ChangeStatusAccountService } from './change-status-account.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ChangeStatusAccountDto } from '../../dto/change.dto';

@ApiTags('Account')
@Controller('change-status-account')
export class ChangeStatusAccountController {
  constructor(private readonly changeStatusAccountService: ChangeStatusAccountService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post(':id')
  async handle(@Param('id') id: string, @Body() data: ChangeStatusAccountDto) {
    await this.changeStatusAccountService.execute(id, data.status)
    return { message: 'Status atualizado com sucesso.' }
  }
}
