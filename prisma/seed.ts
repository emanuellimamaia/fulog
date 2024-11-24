import { PrismaClient } from '@prisma/client';
import { accountSeeds } from './seeds/account.seed';
import { companySeeds } from './seeds/company.seed';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  const hash = async (password: string) => await bcrypt.hash(password, 10);
  try {
    for (const account of accountSeeds) {
      await prisma.account.upsert({
        where: { email: account.email },
        update: {},
        create: { ...account, password: await hash(account.password) },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


/*  await prisma.company.createMany({
   data: companySeeds,
 });

 await prisma.account.createMany({
   data: accountSeeds,
 }); */