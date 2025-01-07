import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetByEmailService } from '../account/use-cases/get-by-email/get-by-email.service';
import { JwtService } from '@nestjs/jwt';
import { Account } from '../account/domain/account.entity';
import { JWT_SECRET } from 'src/shared/global.constants';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private getByEmailService: GetByEmailService,
    private jwtService: JwtService
  ) { }
  async validateUser(email: string, password: string) {

    const account = await this.getByEmailService.execute({ email });
    if (!account.data) {
      throw new UnauthorizedException('invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, account.data.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('invalid credentials');
    }

    return account.data
  }
  getToken(user: Pick<Account, 'id' | 'username' | 'role' | 'email' | 'companyId'>): string {
    const payload = {
      username: user.username,
      role: user.role,
      email: user.email,
      companyId: user.companyId,
    }
    return this.jwtService.sign(payload, { secret: JWT_SECRET });
  }
}
