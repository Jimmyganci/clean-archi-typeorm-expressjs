export interface IGenericRepository<T> {
  Create(entity: T): Promise<T>;
  GetAll(): Promise<T[]>;
  GetById(id?: string): Promise<T>;
  Update(id: string, entity: T): Promise<T>;
  Delete(id: string): Promise<void>;
}
