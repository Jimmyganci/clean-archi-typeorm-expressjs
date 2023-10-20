import { User } from "@entities/User";
import { IUserRepository } from "@interfaces/repositories/IUserRepository";
import { IUserServices } from "@interfaces/services/IUserServices";
import { GenericServices } from "@services/GenericServices";

export class UserServices
  extends GenericServices<User>
  implements IUserServices
{
  constructor(protected repository: IUserRepository) {
    super(repository);
  }

  async GetByManagerEmail(managerEmail: string, id:string): Promise<User> {
    const response = await this.repository.GetByManagerEmail(managerEmail, id)
    return response;
  }

  async GetByCompanyEmail(companyEmail: string, id:string): Promise<User> {
    const response = await this.repository.GetByCompanyEmail(companyEmail, id)
    return response;
  }

  async GetByCompanyName(companyName: string, id:string): Promise<User> {
    const response = await this.repository.GetByCompanyName(companyName, id)
    return response;
  }

  async GetByManagerPhone(companyPhone: string, id:string): Promise<User> {
    const response = await this.repository.GetByManagerPhone(companyPhone, id)
    return response;
  }
}
