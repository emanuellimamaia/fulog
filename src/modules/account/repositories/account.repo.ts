import { Account } from '../domain/account.entity';
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
  async findByEmail(email: string): Promise<Account> {
    const account = await this.prisma.account.findUnique({
      where: { email },

    })
    if (!account) {
      return
    }
    return AccountMapper.toDomain(account);
  }
  async create(account: Account): Promise<Account> {


    const createAccount = await this.prisma.account.create({
      data: {
        company_id: account.companyId,
        username: account.username,
        role: account.role,

      },
      include: { company: true },
    });
    return AccountMapper.toDomain(createAccount)
  }

}
