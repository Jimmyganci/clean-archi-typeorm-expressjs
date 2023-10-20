export interface IGenericServices<Entity> {
  Create(entity: Entity): Promise<Entity>;
  GetAll(): Promise<Entity[]>;
  GetById(id?: string): Promise<Entity>;
  Update(id: string, entity: Entity): Promise<Entity>;
  Delete(id: string): Promise<void>;
}
