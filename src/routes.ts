import { Router } from "express";
import { ensureAuthenticated } from "./middleware/userAuthenticated";
import { AuthController } from "./modules/authentication/auth-controller";
import { CreateController } from "./modules/user/create/create-user-controller";
import { ListController } from "./modules/user/list/list-user-controller";

const router = Router();



router.post('/login', new AuthController().handle);
router.post('/signup', new CreateController().handle);
router.post('/list', ensureAuthenticated,  new ListController().handle);

export {router};