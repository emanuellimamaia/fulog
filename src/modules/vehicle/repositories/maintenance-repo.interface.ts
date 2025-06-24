import { MainTenance } from "../domain/maintenance.entity";

export interface IMaintenanceRepo {
  create(maintenance): Promise<MainTenance>
}