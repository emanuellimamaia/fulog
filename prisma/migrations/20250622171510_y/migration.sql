/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "phoneNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_phoneNumber_key" ON "accounts"("phoneNumber");
