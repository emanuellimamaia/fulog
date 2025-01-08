-- CreateEnum
CREATE TYPE "LogProgress" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "logs" ADD COLUMN     "progress" "LogProgress" NOT NULL DEFAULT 'PENDING';
