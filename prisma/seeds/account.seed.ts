import { Prisma } from '@prisma/client';

export const accountSeeds: Prisma.AccountCreateManyInput[] = [
  {
    username: 'João Maia',
    role: 'Admin',
    id: 'cm019kix200072v6jw6g56r68',
    company_id: 'cm019l4f900092v6jmk3lgly3',
  },
  {
    username: 'Raquel Prieto Garcia',
    role: 'Supervisor',
    id: 'cm019riwm000l2v6jkcfdc91v',
    company_id: 'cm019l4f900092v6jmk3lgly3',
  },
  {
    username: 'Talita Pastore',
    role: 'Supervisor',
    id: 'cm019tv06000n2v6jeeg5z73x',
    company_id: 'cm019q3qq000j2v6jpc7de7q9',
  },
  {
    username: 'Marcela Iwand',
    role: 'Supervisor',
    id: 'cm019vdd3000t2v6j0c1gnwro',
    company_id: 'cm019q3qq000j2v6jpc7de7q9',
  },
];
