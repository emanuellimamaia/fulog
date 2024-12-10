import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "src/shared/use-case";
import { Account } from "../../domain/account.entity";
import { IAccountRepo } from "../../repositories/account-repo.interface";
import { Prisma } from "@prisma/client";

type Input = {
  id: string;
};

type Result = Account
@Injectable()
export class GetMeService implements UseCase<Input, Result> {
  constructor(@Inject('IAccountRepo') private readonly accountRepo: IAccountRepo) { }

  async execute(input: Input): Promise<Result> {
    const where: Prisma.AccountWhereUniqueInput = {
      id: input.id
    }

    const result = await this.accountRepo.findById(input.id)
    return result
  }
} 