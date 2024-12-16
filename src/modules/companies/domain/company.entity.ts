import { Account } from "src/modules/account/domain/account.entity";
import { Entity, EntityMetadata } from "src/shared/entity"

export type CompanyProps = {
  company_name: string;
  id?: string;
  accounts?: Account[];
};

export class Company extends Entity<CompanyProps> {
  private constructor(props: CompanyProps, metadata?: EntityMetadata) {
    super(props, metadata);
  }

  static create(props: CompanyProps, metadata?: EntityMetadata) {
    return new Company(props, metadata);
  }

  get id() {
    return this.props.id;
  }

  get company_name() {
    return this.props.company_name;
  }

  set company_name(company_name: string) {
    this.props.company_name = company_name;
  }

  get accounts() {
    return this.props.accounts;
  }

  set accounts(accounts: Account[]) {
    this.props.accounts = accounts;
  }
}