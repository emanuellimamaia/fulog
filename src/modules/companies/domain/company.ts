import { Entity, EntityMetadata } from "src/shared/entity"

export type CompanyProps = {
  company_name: string
  cnpj: string
  area: string
}

export class Company extends Entity<CompanyProps> {
  constructor(props: CompanyProps, metadata?: EntityMetadata) {
    super(props, metadata)
  }

  static create(props: CompanyProps, metadata?: EntityMetadata) {
    return new Company(props, metadata)
  }
  get company_name() {
    return this.props.company_name
  }
  get cnpj() {
    return this.props.cnpj
  }
  get area() {
    return this.props.area
  }
}
