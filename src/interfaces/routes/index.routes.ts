import { Request, Response, Router } from "express";

const indexRoute = Router();

indexRoute.get("/", (req: Request, res:Response) => {
    res.status(200).send('Connected to the bionbe api!')
});

export { indexRoute };
