/*
  Warnings:

  - You are about to drop the column `withdraw` on the `logs` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logs" DROP COLUMN "withdraw",
ADD COLUMN     "account_id" TEXT NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ALTER COLUMN "notes" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "logs" ADD CONSTRAINT "logs_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
