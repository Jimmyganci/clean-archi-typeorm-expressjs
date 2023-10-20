import { User } from "@entities/User";
import { IGenericServices } from "@interfaces/services/IGenericServices";

export interface IUserServices extends IGenericServices<User> {
  GetByManagerEmail(manager_email: string, id:string): Promise<User>;
  GetByCompanyEmail(company_email: string, id:string): Promise<User>;
  GetByCompanyName(companyName: string, id:string): Promise<User>;
  GetByManagerPhone(phoneNumber: string, id:string): Promise<User>;
}
