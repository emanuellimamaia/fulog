import { Injectable } from "@nestjs/common";

@Injectable()
export class IndexAccountsService {
  constructor() { }

  async execute() {
    return {
      message: 'Hello usarios'
    }
  }
}