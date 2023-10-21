import { Token } from "@entities/Token";
import { IGenericServices } from "@interfaces/services/IGenericServices";

export interface ITokenServices extends IGenericServices<Token> {
    GetAllByUser(usr_id:string): Promise<Token[]>;
}
