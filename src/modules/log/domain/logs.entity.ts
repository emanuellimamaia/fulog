import { Account } from "src/modules/account/domain/account.entity";
import { Company } from "src/modules/companies/domain/company.entity";
import { Vehicle } from "src/modules/vehicle/domain/vehicle.entity";
import { Entity, EntityMetadata } from "src/shared/entity";
import { LogProgress } from "src/shared/global.constants";

export type LogProps = {
  companyId: string,
  company?: Company
  vehicle?: Vehicle
  account?: Account
  vehicleId: string,
  accountId: string,
  initialKilometers: number,
  finalKilometers?: number,
  delivered?: Date,
  notes?: string,
  progress: string
}

export class Log extends Entity<LogProps> {
  constructor(props: LogProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }
  static create(props: LogProps, metadata?: EntityMetadata) {
    return new Log(props, metadata)
  }

  get companyId() {
    return this.props.companyId
  }
  get company() {
    return this.props.company
  }

  get vehicleId() {
    return this.props.vehicleId

  }
  get vehicle() {
    return this.props.vehicle
  }
  get accountId() {
    return this.props.accountId
  }
  get account() {
    return this.props.account
  }

  get progress() {
    return this.props.progress
  }
  set progress(progress: string) {
    this.props.progress = progress
  }
  get initialKilometers() {
    return this.props.initialKilometers
  }
  get finalKilometers() {
    return this.props.finalKilometers
  }
  set finalKilometers(finalKilometers: number) {
    this.props.finalKilometers = finalKilometers
  }
  get delivered() {
    return this.props.delivered
  }
  set delivered(delivered: Date) {
    this.props.delivered = delivered
  }
  get notes() {
    return this.props.notes
  }
  set notes(notes: string) {
    this.props.notes = notes
  }
}