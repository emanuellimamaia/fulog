export interface LogDto {
  id: string
  companyId: string
  vehicleId: string
  accountId: string
  initialKilometers: number
  finalKilometers: number
  delivered: Date
  notes?: string
} 