import { Log } from "../domain/logs.entity";

export interface ILogRepo {
  findAll(): Promise<{ total: number; data: Log[] }>
  findById(id: string): Promise<Log | null>;
  create(log: Log): Promise<Log>
  finish(log: Log): Promise<Log>;
  /*   findById(id: string): Promise<Log>
*/
}