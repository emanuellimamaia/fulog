-- CreateTable
CREATE TABLE "Maintenance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleId" TEXT,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
