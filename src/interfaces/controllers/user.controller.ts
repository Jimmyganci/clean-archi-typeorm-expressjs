import { NextFunction, Request, Response } from "express";
import { IUserServices } from "@interfaces/services/IUserServices";
import { NotFoundError } from "@error-custom//NotFoundError";
import { CreateUserDTO } from "@dtos/createUserDTO";
import { validate } from "class-validator";
import { User } from "@entities/User";

export class UserController {
  constructor(private _userServices: IUserServices) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      const response = await this._userServices.GetAll();

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this._userServices.GetById((id));

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new CreateUserDTO(req.body);

      const validationError = await validate(user);

      if (validationError.length > 0) {
        res.status(400).json(
          validationError.map((error) => {
            return {
              [error.property]: Object.values(error.constraints),
            };
          })
        );
      }

      const response = await this._userServices.Create(new User(req.body));
      return res.status(201).json(response);
    } catch (error) {
      return next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = new CreateUserDTO(req.body);

      const validationError = await validate(user);

      if (validationError.length > 0) {
        res.status(400).json(
          validationError.map((error) => {
            return {
              [error.property]: Object.values(error.constraints),
            };
          })
        );
      }

      const response = await this._userServices.Update(
        id,
        new User(req.body)
      );

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this._userServices.Delete(id);

      return res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  }
}
