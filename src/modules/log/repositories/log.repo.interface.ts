import { Log } from "../domain/logs";

export interface ILogRepo {
  findAll(): Promise<{ total: number; data: Log[] }>
  /*   findById(id: string): Promise<Log>
    create(log: Log): Promise<Log> */
}