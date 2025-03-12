-- CreateTable
CREATE TABLE "fuel_expenses" (
    "id" TEXT NOT NULL,
    "vehicle_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ammount" DOUBLE PRECISION NOT NULL,
    "liters" DOUBLE PRECISION NOT NULL,
    "price_per_liter" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fuel_expenses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fuel_expenses" ADD CONSTRAINT "fuel_expenses_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
