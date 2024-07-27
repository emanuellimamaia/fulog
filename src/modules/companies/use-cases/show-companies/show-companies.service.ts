import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowCompaniesService {
  constructor() {

  }
  async execute(idUser: string) {
    return { message: `usuario ${idUser}`, }
  }
}