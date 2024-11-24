import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GetByEmailService } from '../account/use-cases/get-by-email/get-by-email.service';
import { AccountModule } from '../account.module';
import { DatabaseModule } from 'src/infra/database.module';
import { AccountRepo } from '../account/repositories/account.repo';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/shared/global.constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [DatabaseModule, AccountModule, JwtModule.register({
    global: true,
    secret: JWT_SECRET,
    signOptions: { expiresIn: '1d' }


  })],
  providers: [AuthService, GetByEmailService, LocalStrategy, JwtService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
