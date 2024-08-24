import { Account } from '../domain/account';
import { IAccountRepo } from './account-repo.interface';
import { Injectable } from '@nestjs/common';
import { AccountMapper } from '../mappers/account.mappers';
import { PrismaService } from 'src/infra/prisma/prisma.service';
@Injectable()
export class AccountRepo implements IAccountRepo {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<{ total: number; data: Account[] }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.account.count(),
      this.prisma.account.findMany({ include: { company: true } }),
    ]);
    return { total, data: data.map((e) => AccountMapper.toDomain(e)) };
  }
  async findById(id: string): Promise<Account> {
    const account = await this.prisma.account.findUnique({
      where: { id },
      include: { company: true },
    });
    if (!account) {
      return;
    }
    return AccountMapper.toDomain(account);
  }
}
