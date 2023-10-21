import { Equal, FindOptionsWhere, Like, Not } from "typeorm";
import { GenericRepository } from "@repositories/GenericRepository";
import { ITokenRepository } from "@interfaces/repositories/ITokenRepository";
import { Token } from "@entities/Token";
import { User } from "@entities/User";

export class TokenRepository
  extends GenericRepository<Token>
  implements ITokenRepository
{
  constructor() {
    const Entity = Token;
    super(Entity);
  }

  async GetAllByUser(user_id: string): Promise<Token[]> {
    const tokens = await this.repository.find({
      where: {
        user_id: Equal(user_id)
      }
    });
    return tokens
  }

}
