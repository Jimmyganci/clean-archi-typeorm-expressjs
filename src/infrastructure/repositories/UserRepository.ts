import { EntityTarget, FindOptionsWhere, Not } from "typeorm";
import { User } from "@entities/User";
import { GenericRepository } from "@repositories/GenericRepository";
import { IUserRepository } from "@interfaces/repositories/IUserRepository";

export class UserRepository
  extends GenericRepository<User>
  implements IUserRepository
{
  constructor() {
    const Entity = User;
    super(Entity);
  }
  async GetByManagerEmail(managerEmail: string, id: string): Promise<User> {
    const criterias = { 
      where: { 
        manager_email: managerEmail ,
        id: Not(id)
      } as FindOptionsWhere<User>,
      
    };
    const user = await this.repository.findOne(criterias);
    return user;
  }
  async GetByCompanyEmail(companyEmail: string, id:string): Promise<User> {
    const criterias = { where: { company_email: companyEmail, id: Not(id) } as FindOptionsWhere<User> };
    const user = await this.repository.findOne(criterias);
    return user;
  }
  async GetByCompanyName(companyName: string, id: string): Promise<User> {
    const criterias = { where: { company_name: companyName, id: Not(id) } as FindOptionsWhere<User> };
    const user = await this.repository.findOne(criterias);
    return user;
  }
  async GetByManagerPhone(phoneNumber: string, id: string): Promise<User> {
    const criterias = { where: { manager_phone:  phoneNumber, id: Not(id)} as FindOptionsWhere<User> };
    const user = await this.repository.findOne(criterias);
    return user;
  }
}
