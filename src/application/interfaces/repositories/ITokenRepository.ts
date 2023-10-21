import { Token } from "@entities/Token";
import { IGenericRepository } from "@interfaces/repositories/IGenericRepository";

export interface ITokenRepository extends IGenericRepository<Token> {
    GetAllByUser(usr_id:string): Promise<Token[]>;
}
