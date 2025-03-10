/*
  Warnings:

  - You are about to drop the column `ammount` on the `fuel_expenses` table. All the data in the column will be lost.
  - You are about to alter the column `liters` on the `fuel_expenses` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `price_per_liter` on the `fuel_expenses` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `amount` to the `fuel_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fuel_expenses" DROP COLUMN "ammount",
ADD COLUMN     "amount" INTEGER NOT NULL,
ALTER COLUMN "liters" SET DATA TYPE INTEGER,
ALTER COLUMN "price_per_liter" SET DATA TYPE INTEGER;
