
import {Request, Response} from 'express';
import { ListParticipantsEventRepository } from './list-participants-event-repository';

export class ListParticipantsEventController{

    async handle(request: Request, response: Response){

        const { event_id } = request.body;
        const listParticipantsEventRepository = new ListParticipantsEventRepository();
        const result = await listParticipantsEventRepository.execute({event_id});
        return response.json(result);
    }
}