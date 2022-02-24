import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginController } from "./controller/LoginController";
import { ensureAuthenticated } from "./middleware/userAuthenticated";

const router = Router();

router.post('/signin', new LoginController().handle);
router.post('/signup', new CreateUserController().handle);
router.get('/teste', ensureAuthenticated, (req, res)=>{
    res.send('etste');
});

export {router};