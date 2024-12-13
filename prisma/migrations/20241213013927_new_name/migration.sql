/*
  Warnings:

  - Changed the type of `role` on the `accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'EMPLOYEE');

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "role",
ADD COLUMN     "role" "Roles" NOT NULL;

-- DropEnum
DROP TYPE "Role";
