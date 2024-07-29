import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowAccountsService {
  constructor() {

  }
  async execute(id: string) {
    return { messagem: `id so usuario é ${id}` }
  }
}