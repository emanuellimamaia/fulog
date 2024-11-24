import { Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAccountRepo } from '../account/repositories/account-repo.interface';
import { JWT_SECRET } from 'src/shared/global.constants';
import { AccountMapper } from '../account/mappers/account.mappers';
import { GetByEmailService } from '../account/use-cases/get-by-email/get-by-email.service';
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private getByEmailService: GetByEmailService,) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    })
  }


  async validate(payload) {
    const account = await this.getByEmailService.execute(payload.username);

    return account;
  }
}