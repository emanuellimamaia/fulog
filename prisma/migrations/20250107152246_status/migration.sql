/*
  Warnings:

  - You are about to drop the column `teste` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "teste",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
