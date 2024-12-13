/*
  Warnings:

  - You are about to drop the column `area` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `companies` table. All the data in the column will be lost.
  - Changed the type of `role` on the `accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EMPLOYEE');

-- DropIndex
DROP INDEX "companies_cnpj_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "area",
DROP COLUMN "cnpj";
