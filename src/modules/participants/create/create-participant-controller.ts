import { Request, Response } from "express";
import { CreateParticipantsRepository } from "./create-participant-repository";



export class CreateParticipantsController{


    async handle(request: Request, response: Response){

        const { id_event ,name_participant, email_participant } = request.body;

        console.log(id_event ,name_participant, email_participant);

        const createParticipantsRepository = new CreateParticipantsRepository();
        const result = await createParticipantsRepository.execute({id_event, name_participant, email_participant});

        return response.json("Participante adicionado com sucesso");

    }
}