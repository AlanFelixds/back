import { Request, Response } from "express";
import { CreateRepository } from "./create-user-repository";


export class CreateController {

    async handle(request: Request, response: Response){

        const { name, email, password } = request.body;
        const createRepository = new CreateRepository();
        await createRepository.execute({name, email, password});

        return response.status(201).send();
    }
}
