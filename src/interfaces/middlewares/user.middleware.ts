import { NextFunction, Request, Response } from "express"
import { IUserServices } from "@interfaces/services/IUserServices";
import { CustomError } from "@error-custom/CustomError";

export class UserMiddlewares {
    constructor(private _userServices: IUserServices) {}
    
   userExists = async (req: Request, res: Response, next: NextFunction) => {
            const { id } = req.params;
            const response = await this._userServices.GetById((id));
            if (!response) res.status(404).send('User not found')
            else next()
    }

    fieldExists = async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const { company_email, manager_email, company_name, manager_phone } = req.body;
      const userByCompanyEmail = await this._userServices.GetByCompanyEmail(company_email, id)
      const results= [];
      if (userByCompanyEmail) results.push(company_email)

      const userByManagerEmail = await this._userServices.GetByManagerEmail(manager_email, id)
      if (userByManagerEmail) results.push(manager_email)

      const userByCompanyName = await this._userServices.GetByCompanyName(company_name, id)
      if (userByCompanyName) results.push(company_name)

      const userByManagerPhone = await this._userServices.GetByManagerPhone(manager_phone, id)
      if (userByManagerPhone) results.push(manager_phone)


      if(results.length) {
        res.status(409).send(`Fields ${results.join(', ')} are already exists in database`)
      } else {
        next()
      }
      
      
    }
  }