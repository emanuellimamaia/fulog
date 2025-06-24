/*
  Warnings:

  - Added the required column `date` to the `Maintenance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Maintenance" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
