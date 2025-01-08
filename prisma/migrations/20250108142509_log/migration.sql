-- AlterTable
ALTER TABLE "logs" ALTER COLUMN "progress" SET DEFAULT 'Em progresso';

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "availability" TEXT NOT NULL DEFAULT 'disponivel';
