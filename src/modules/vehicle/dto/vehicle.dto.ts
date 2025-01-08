export type VehicleDto = {
  id: string,
  model: string,
  kilometers: number,
  brand: string,
  license_plate: string,
  year: number,
  type_of_fuel: string,
  status?: boolean
  availability?: string
}