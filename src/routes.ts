import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginController } from "./controller/LoginController";

const router = Router();

router.post('/login', new LoginController().handle);
router.post('/signup', new CreateUserController().handle);

export {router};