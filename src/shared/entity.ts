export interface EntityMetadata {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export class Entity<T> {
  protected readonly props: T;
  private readonly _id: string
  private readonly _created_at: Date
  private readonly _updated_at: Date

  constructor(props: T, metadata?: EntityMetadata) {

    this.props = props
    this._id = metadata?.id
    this._created_at = metadata?.created_at
    this._updated_at = metadata?.updated_at
  }

  get id() {
    return this._id
  }
  get created_at() {
    return this._created_at
  }
  get updated_at() {
    return this._updated_at
  }
} 