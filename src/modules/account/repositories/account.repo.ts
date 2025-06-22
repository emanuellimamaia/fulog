import { Account } from '../domain/account.entity';
import { IAccountRepo } from './account-repo.interface';
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
  async verifyPhoneNumber(phoneNumber: string): Promise<Account> {

    const account = await this.prisma.account.findUnique({
      where: { phoneNumber },
      include: { company: true, logs: true },
    });
    if (!account) {
      throw new NotFoundException('Conta não encontrada.');
    }
    return AccountMapper.toDomain(account);
  }
  async findByEmail(email: string): Promise<Account> {
    const account = await this.prisma.account.findUnique({
      where: { email },
      include: { company: true },
    })
    if (!account) {
      throw new NotFoundException('Conta não encontrada.');
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
  async changeStatus(id: string, status: boolean) {
    try {
      const result = await this.prisma.account.update({
        where: { id },
        data: {
          status
        }
      })
      return {
        message: 'Status atualizado com sucesso.',
        account: result,
      };
    } catch (error) {
      throw new Error('Não foi possível atualizar o status. Tente novamente mais tarde.');
    }
  }
}
