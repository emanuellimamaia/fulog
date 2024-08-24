import { Prisma } from '@prisma/client';

export const companySeeds: Prisma.CompanyCreateManyInput[] = [
  {
    id: 'cm019l4f900092v6jmk3lgly3',
    area: 'turismo',
    cnpj: '59872661000150',
    company_name: 'Polaris Turismo',
  },
  {
    id: 'cm019q3qq000j2v6jpc7de7q9',
    cnpj: '48586030000158',
    area: 'farmarcia',
    company_name: 'Circinus Farmacêutica',
  },
];
