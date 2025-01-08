import { Entity, EntityMetadata } from "src/shared/entity";
import { LogProgress } from "src/shared/global.constants";

export type LogProps = {
  companyId: string,
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
  get vehicleId() {
    return this.props.vehicleId

  }
  get accountId() {
    return this.props.accountId
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
  get delivered() {
    return this.props.delivered
  }
  get notes() {
    return this.props.notes
  }
}