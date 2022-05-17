import { Router } from "express";
import { ensureAuthenticated } from "./middleware/userAuthenticated";
import { CreateController } from "./modules/servidor/crud/create/createController";

const router = Router();





//REITOR


//ADMIN


//SERVIDOR

// router.post('/signin', new LoginController().handle);
router.post('/signup', new CreateController().handle);

export {router};