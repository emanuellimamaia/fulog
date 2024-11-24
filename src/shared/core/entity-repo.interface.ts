import { PaginationResult } from "./pagination-result.interface";


export interface IEntityRepo<Entity, FindAllParams, FindByParams> {
  save(entity: Entity): Promise<Entity>;
  findAll(options: FindAllParams): Promise<PaginationResult<Entity>>;
  findBy(options: FindByParams): Promise<Entity>;
  update(entity: Entity): Promise<Entity>;
}
