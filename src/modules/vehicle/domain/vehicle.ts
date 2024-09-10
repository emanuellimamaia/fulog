import { Entity, EntityMetadata } from "src/shared/entity"


interface VehicleProps {
  kilometers: number,
  brand: string,
  license_plate: string,
  year: number,
  type_of_fuel: string,
  company_id: string,
}

export class Vehicle extends Entity<VehicleProps> {
  constructor(props: VehicleProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }
  static create(props: VehicleProps, metadata?: EntityMetadata) {
    return (new Vehicle(props, metadata))
  }
  get kilometers() {
    return this.props.kilometers
  }
  get brand() {
    return this.props.brand
  }
  get license_plate() {
    return this.props.license_plate
  }
  get year() {
    return this.props.year
  }
  get type_of_fuel() {
    return this.props.type_of_fuel
  }
  get company_id() {
    return this.props.company_id
  }
}