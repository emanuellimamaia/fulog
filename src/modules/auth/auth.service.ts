import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetByEmailService } from '../account/use-cases/get-by-email/get-by-email.service';
import { JwtService } from '@nestjs/jwt';
import { Account } from '../account/domain/account';
import { JWT_SECRET } from 'src/shared/global.constants';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private getByEmailService: GetByEmailService,
    private jwtService: JwtService
  ) { }
  async validateUser(email: string, password: string) {
    const account = await this.getByEmailService.execute({ email: email })
    const isPasswordValid = await bcrypt.compare(password, account.data.password)
    if (!isPasswordValid)
      throw new UnauthorizedException('invalid credentials');
    return account.data
  }
  getToken(user: Pick<Account, 'id' | 'username' | 'role'>): string {
    const payload = {
      username: user.username,
      role: user.role,
    }
    return this.jwtService.sign(payload, { secret: JWT_SECRET });
  }
}
