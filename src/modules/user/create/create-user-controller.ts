import { Request, Response } from "express";
import { CreateRepository } from "./create-user-repository";


export class CreateController {

    async handle(request: Request, response: Response){

        const { name, email, password } = request.body;
        const createRepository = new CreateRepository();
        const result = await createRepository.execute({name, email, password});

        return response.json(result);
    }
}
