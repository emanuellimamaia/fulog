import { Company } from "src/modules/companies/domain/company"
import { Entity, EntityMetadata } from "src/shared/entity"

type AccountProps = {
  id?: string,
  companyId?: string,
  company?: Company
  username: string
  role: string

}

export class
  Account extends Entity<AccountProps> {
  constructor(props: AccountProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }
  static create(props: AccountProps, metadata?: EntityMetadata) {
    return new Account(props, metadata)
  }
  get companyId() {
    return this.props.companyId
  }
  get company() {
    return this.props.company
  }
  get role() {
    return this.props.role
  }
  get username() {
    return this.props.username
  }
  get id() {
    return this.props.id
  }

}