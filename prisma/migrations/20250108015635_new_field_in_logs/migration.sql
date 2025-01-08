/*
  Warnings:

  - The `progress` column on the `logs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "logs" DROP COLUMN "progress",
ADD COLUMN     "progress" TEXT NOT NULL DEFAULT '';

-- DropEnum
DROP TYPE "LogProgress";
