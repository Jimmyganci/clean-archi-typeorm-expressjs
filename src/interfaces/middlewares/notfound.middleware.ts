import { Request, Response } from "express";

export const NotFoundHandler = (
  req: Request,
  res: Response,
) => {    
  res.status(404).send('Route not exists')
};
