import { Vehicle } from "src/modules/vehicle/domain/vehicle.entity"
import { Entity, EntityMetadata } from "src/shared/entity"

interface MainTenanceProps {
  id?: string
  name: string
  value: number
  date: Date
  vehicleId: string
  vehicle?: Vehicle
}
export class MainTenance extends Entity<MainTenanceProps> {
  constructor(props: MainTenanceProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }

  static create(props: MainTenanceProps, metadata?: EntityMetadata) {
    return (new MainTenance(props, metadata))
  }

  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }
  get value() {
    return this.props.value
  }
  get date() {
    return this.props.date
  }
  get vehicleId() {
    return this.props.vehicleId
  }
  get vehicle() {
    return this.props.vehicle
  }
}