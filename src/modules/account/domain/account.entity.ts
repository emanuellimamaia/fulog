import { Company } from "src/modules/companies/domain/company.entity"
import { Entity, EntityMetadata } from "src/shared/entity"
import * as bcrypt from 'bcrypt';
import { Roles } from "src/shared/core/types.enum";
type AccountProps = {
  id?: string,
  companyId?: string,
  company?: Company
  username: string
  status?: boolean
  role?: string
  email: string
  password: string
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
  get status() {
    return this.props.status
  }
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Returns the username of the account.
   */
  /******  fe3ecd18-0b92-4bdc-91db-bc5a1985ee26  *******/
  get username() {
    return this.props.username
  }
  get id() {
    return this.props.id
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.props.email = email
  }

  get password() {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = bcrypt.hashSync(password, 10);
  }
}