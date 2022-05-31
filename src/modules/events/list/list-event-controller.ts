import { Request, Response } from "express";
import { ListEventRepository } from "./list-event-repository";


export class ListEventController {

    async handle(request: Request, response: Response){

        const user_id = request.id_user;

        const listEventRepository = new ListEventRepository();
        const result = await listEventRepository.execute({user_id});

        return response.json(result);
    }
}




