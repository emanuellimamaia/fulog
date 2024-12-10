import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_SECRET } from 'src/shared/global.constants';
import { GetByEmailService } from '../account/use-cases/get-by-email/get-by-email.service';
import { AccountMapper } from '../account/mappers/account.mappers';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private getByEmailService: GetByEmailService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    })
  }


  async validate(payload) {
    const account = await this.getByEmailService.execute({ email: payload.email });
    return AccountMapper.toDto(account.data)
  }
}