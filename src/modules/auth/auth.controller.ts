import { Body, Controller, HttpCode, HttpStatus, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from './auth-user.dto';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('login')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @ApiExtraModels(AuthUserDto)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async handle(@Request() req, @Body() data: AuthUserDto) {
    try {
      const { id, role, username } = req.user;
      const { email } = data;
      const token = this.authService.getToken({ id, role, username, email });
      return { id, role, token, email };
    } catch (error) {
      throw error;
    }
  }

}

