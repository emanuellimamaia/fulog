

import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "src/shared/use-case";
import { IVehicleRepo } from "../../repositories/vehicle-repo.interface";
import { ICompanyRepo } from 'src/modules/companies/repositories/company.repo.interface'
import { Vehicle } from "../../domain/vehicle.entity";
import { CreateVehicleDto } from "../../dto/create-vehicle.dto";
type Input = CreateVehicleDto & {
  companyId: string
}

type Result = {
  type: 'CreateVehicleSuccess'
  data: Vehicle
}

@Injectable()
export class CreateVehicleService implements UseCase<Input, Result> {
  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo,
  ) { }

  async execute(input: Input): Promise<Result> {
    const vehicle = Vehicle.create({
      model: input.model,
      brand: input.brand,
      kilometers: input.kilometers,
      license_plate: input.license_plate,
      type_of_fuel: input.type_of_fuel,
      year: input.year,
      company_id: input.companyId
    })
    const data = await this.vehicleRepo.create(vehicle)


    return { type: 'CreateVehicleSuccess', data }

  }
}