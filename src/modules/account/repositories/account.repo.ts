import { Account } from '../domain/account.entity';
import { IAccountRepo } from './account-repo.interface';
import { ConflictException, Injectable } from '@nestjs/common';
import { AccountMapper } from '../mappers/account.mappers';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class AccountRepo implements IAccountRepo {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(companyId: string): Promise<{ total: number; data: Account[] }> {
    const [total, data] = await this.prisma.$transaction([
      this.prisma.account.count(),
      this.prisma.account.findMany({ where: { company_id: companyId }, include: { company: true } }),
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
      include: { company: true }
    })
    if (!account) {
      return
    }
    return AccountMapper.toDomain(account);
  }
  async create(account: Account): Promise<Account> {
    try {
      const createAccount = await this.prisma.account.create({
        data: {
          company_id: account.companyId,
          username: account.username,
          role: account.role,
          email: account.email,
          password: account.password,

        },
        include: { company: true },
      });
      return AccountMapper.toDomain(createAccount)
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('Email já está em uso.');
      }
      throw error
    }

  }

}
