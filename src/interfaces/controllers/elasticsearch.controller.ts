import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "@error-custom//NotFoundError";
import { IElasticsearchServices } from "@interfaces/services/IElasticsearch";

export class ElasticsearchController {
  constructor(private _elasticsearchServices: IElasticsearchServices) {}

  getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      
      const response = await this._elasticsearchServices.GetAllEvents(filter)


      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getAllActivities = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = await this._elasticsearchServices.GetAllActivities(filter)

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getAllPages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = await this._elasticsearchServices.GetAllPages(filter)

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      
      const response = await this._elasticsearchServices.GetAllUsers(filter)

      if (!response) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };
}
