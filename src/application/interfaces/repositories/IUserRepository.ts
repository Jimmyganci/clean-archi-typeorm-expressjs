import { User } from "@entities/User";
import { IGenericRepository } from "@interfaces/repositories/IGenericRepository";

export interface IUserRepository extends IGenericRepository<User> {
  GetByManagerEmail(managerEmail: string, id:string): Promise<User>;
  GetByCompanyEmail(companyEmail: string, id:string): Promise<User>;
  GetByCompanyName(companyName: string, id:string): Promise<User>;
  GetByManagerPhone(phoneNumber: string, id:string): Promise<User>;
}
