import { Entity, EntityMetadata } from "src/shared/entity"
import { Vehicle } from "src/modules/vehicle/domain/vehicle.entity";
interface FuelExpensesProps {
  id?: string
  vehicle_id: string
  vehicle?: Vehicle
  date: Date
  amount: number
  liters: number
  price_per_liter: number
}

export class FuelExpenses extends Entity<FuelExpensesProps> {
  constructor(props: FuelExpensesProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }

  static create(props: FuelExpensesProps, metadata?: EntityMetadata) {
    return (new FuelExpenses(props, metadata))
  }
  get id(): string | undefined {
    return this.props.id;
  }

  get vehicleId(): string {
    return this.props.vehicle_id;
  }

  get vehicle() {
    return this.props.vehicle
  }
  get date() {
    return this.props.date;
  }

  get amount(): number {
    return this.props.amount;
  }

  get liters(): number {
    return this.props.liters;
  }

  get price_per_liter(): number {
    return this.props.price_per_liter;
  }

}