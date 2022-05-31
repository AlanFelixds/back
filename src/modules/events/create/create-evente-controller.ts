import { Request, Response } from "express";
import { CreateEventRepository } from "./create-event-repository";


export class CreateEventController {

    async handle(request: Request, response: Response){

        const { event_name, event_date } = request.body;
        const user_email = request.id_user;

        const new_date = new Date(event_date);
        const full_date = new Date(new_date.valueOf() - new_date.getTimezoneOffset() * 60000)

        const createEventRepository = new CreateEventRepository();
        const result = await createEventRepository.execute({event_name, event_date: full_date, user_email});

        return response.json(result);
    }
}




