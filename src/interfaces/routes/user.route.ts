import { Router } from "express";
import { UserController } from "@controllers/user.controller";
import { UserRepository } from "@repositories/UserRepository";
import { UserServices } from "@services/UserServices";
import { UserMiddlewares } from "@middlewares/user.middleware";

const userRoute = Router();
const userRepository = new UserRepository();
const userServices = new UserServices(userRepository);
const userController = new UserController(userServices);
const userMiddlewares = new UserMiddlewares(userServices)


userRoute.get("/", userController.getAll);
userRoute.get("/:id", userController.getById);
userRoute.post("/",userMiddlewares.fieldExists, userController.create);
userRoute.put("/:id", [userMiddlewares.userExists, userMiddlewares.fieldExists], userController.update);
userRoute.delete("/:id", userMiddlewares.userExists , userController.delete);

export { userRoute };
