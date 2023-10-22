import { Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/UserRepository";
import { UserServices } from "@services/UserServices";
import { UserMiddlewares } from "@middlewares/user.middleware";
import { TokenRepository } from "@repositories/TokenRepository";
import { TokenServices } from "@services/TokenServices";

const userRoute = Router();

const userRepository = new UserRepository();
const tokenRepository = new TokenRepository()

const userServices = new UserServices(userRepository);
const tokenServices = new TokenServices(tokenRepository)

const userController = new UserController(userServices, tokenServices);
const userMiddlewares = new UserMiddlewares(userServices)

// users

/**
 * @openapi
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 */
userRoute.get("/", userController.getAll);

userRoute.get("/:id", userController.getById);
userRoute.post("/",userMiddlewares.fieldExists, userController.create);
userRoute.put("/:id", [userMiddlewares.userExists, userMiddlewares.fieldExists], userController.update);
userRoute.delete("/:id", userMiddlewares.userExists , userController.delete);

// users token 
userRoute.post("/:id/tokens",userMiddlewares.userExists , userController.createUserToken);
userRoute.get("/:id/tokens", userController.getAllToken);

export { userRoute };
