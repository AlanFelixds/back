import { Router } from "express";
import { ensureAuthenticated } from "./middleware/userAuthenticated";
import { AuthController } from "./modules/authentication/auth-controller";
import { CreateEventController } from "./modules/events/create/create-evente-controller";
import { ListEventController } from "./modules/events/list/list-event-controller";
import { CreateParticipantsController } from "./modules/participants/create/create-participant-controller";
import { ListParticipantsEventController } from "./modules/participants/list/list-participants-event-controller";
import { CreateController } from "./modules/user/create/create-user-controller";

const router = Router();



router.post('/login', new AuthController().handle);
router.post('/signup', new CreateController().handle);


router.get('/event', ensureAuthenticated,  new ListEventController().handle);
router.post('/event', ensureAuthenticated, new CreateEventController().handle);

router.post('/event/participant', ensureAuthenticated, new CreateParticipantsController().handle);
router.post('/event/participantList', ensureAuthenticated, new ListParticipantsEventController().handle);


export {router};