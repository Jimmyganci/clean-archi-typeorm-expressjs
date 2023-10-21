import { Token } from "@entities/Token";
import { ITokenRepository } from "@interfaces/repositories/ITokenRepository";
import { ITokenServices } from "@interfaces/services/ITokenServices";
import { GenericServices } from "@services/GenericServices";

export class TokenServices
  extends GenericServices<Token>
  implements ITokenServices
{
  constructor(protected repository: ITokenRepository) {
    super(repository);
  }

  async GetAllByUser( user_id:string): Promise<Token[]> {
    const response = await this.repository.GetAllByUser(user_id)
    return response;
  }
  
}
