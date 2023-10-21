import { NextFunction, Request, Response } from "express";
import { IUserServices } from "@interfaces/services/IUserServices";
import { NotFoundError } from "@error-custom//NotFoundError";
import { ITokenServices } from "@interfaces/services/ITokenServices";

export class ElasticsearchController {
  constructor() {}

  getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = []

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  };
  getAllActivities = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = []

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  };
  getAllPages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = []

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  };
  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filter = req.body;
      console.log(filter);
      
      const response = []

      if (response.length === 0) {
        throw new NotFoundError("No data found");
      }

      return res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  };
}
