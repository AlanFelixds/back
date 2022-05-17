import { Request, Response } from "express";
import { CreateRepository } from "./createRepository";


export class CreateController {

    async handle(request: Request, response: Response){

        const { email, password } = request.body;
        const createRepository = new CreateRepository();
        const result = await createRepository.execute({email, password});

        return response.json(result);
    }
}
