import { Injectable } from "@nestjs/common";

@Injectable()
export class IndexCompaniesService {
  constructor() { }

  async execute() {
    return {
      message: "Hello World"
    }
  }
}