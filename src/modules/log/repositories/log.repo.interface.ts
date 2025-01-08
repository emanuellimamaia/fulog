import { Log } from "../domain/logs.entity";

export interface ILogRepo {
  findAll(): Promise<{ total: number; data: Log[] }>
  create(log: Log): Promise<Log>
  /*   findById(id: string): Promise<Log>
*/
}