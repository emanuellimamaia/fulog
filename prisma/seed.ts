import { PrismaClient } from '@prisma/client';
import { accountSeeds } from './seeds/account.seed';
import { companySeeds } from './seeds/company.seed';

const prisma = new PrismaClient();

async function main() {

  await prisma.company.createMany({
    data: companySeeds,
  });

  await prisma.account.createMany({
    data: accountSeeds,
  });
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
