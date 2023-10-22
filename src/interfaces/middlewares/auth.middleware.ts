import { NextFunction, Request, Response } from "express"
import { ITokenServices } from "@interfaces/services/ITokenServices";

export class AuthMiddlewares {
    constructor(private _tokenServices: ITokenServices) {}

    checkUserAuth = async (req: Request, res: Response, next: NextFunction) => {
        const {apikey} = req.query
        console.log(apikey);
        if(!apikey) res.status(400).send("Missing api key")

        const tokens = await this._tokenServices.GetById(apikey.toString())
        console.log(tokens);
        if(!tokens) res.status(404).send("Invalid token, you can't connected!")
        else next()
        
    }
  }