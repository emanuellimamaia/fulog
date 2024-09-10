import { Company } from "src/modules/companies/domain/company";

import { Inject, Injectable } from "@nestjs/common";
import { UseCase } from "src/shared/use-case";
import { IVehicleRepo } from "../../repositories/vehicle-repo.interface";
import { ICompanyRepo } from 'src/modules/companies/repositories/company.repo.interface'
import { Vehicle } from "../../domain/vehicle";
import { CreateVehicleDto } from "../../dto/create-vehicle.dto";
type Input = CreateVehicleDto & {
  companyId: string
}

type Result = {
  type: 'CreateCompanySuccess'
  data: Vehicle
}

@Injectable()
export class CreateVehicleService implements UseCase<Input, Result> {
  constructor(
    @Inject('IVehicleRepo')
    private readonly vehicleRepo: IVehicleRepo,
    @Inject('ICompanyRepo')
    private readonly companyRepo: ICompanyRepo,
  ) { }

  async execute(input: Input): Promise<Result> {
    const vehicle = Vehicle.create({
      brand: input.brand,
      kilometers: input.kilometers,
      license_plate: input.license_plate,
      type_of_fuel: input.type_of_fuel,
      year: input.year,
      company_id: input.companyId

    })
    const data = await this.vehicleRepo.create(vehicle)


    return { type: 'CreateCompanySuccess', data }

  }
}