import { Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/UserRepository";
import { UserServices } from "@services/UserServices";
import { UserMiddlewares } from "@middlewares/user.middleware";
import { TokenRepository } from "@repositories/TokenRepository";
import { TokenServices } from "@services/TokenServices";
import { AuthMiddlewares } from "@middlewares/auth.middleware";

const userRoute = Router();

const userRepository = new UserRepository();
const tokenRepository = new TokenRepository()

const userServices = new UserServices(userRepository);
const tokenServices = new TokenServices(tokenRepository)

const userController = new UserController(userServices, tokenServices);
const userMiddlewares = new UserMiddlewares(userServices)
const authMiddleware = new AuthMiddlewares(tokenServices)

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
userRoute.get("/",authMiddleware.checkUserAuth,  userController.getAll);

userRoute.get("/:id",authMiddleware.checkUserAuth,  userController.getById);
userRoute.post("/",userMiddlewares.fieldExists, userController.create);
userRoute.put("/:id", [authMiddleware.checkUserAuth, userMiddlewares.userExists, userMiddlewares.fieldExists], userController.update);
userRoute.delete("/:id", [authMiddleware.checkUserAuth, userMiddlewares.userExists] , userController.delete);

// users token 
userRoute.post("/:id/tokens",userMiddlewares.userExists , userController.createUserToken);
userRoute.get("/:id/tokens",userMiddlewares.userExists,  userController.getAllToken);
userRoute.delete("/:id/tokens/:token_id",[authMiddleware.checkUserAuth, userMiddlewares.userExists], userController.deleteToken);

export { userRoute };
