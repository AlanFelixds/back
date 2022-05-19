import { Request, Response } from "express";
import { ListRepository } from "./list-user-repository";


export class ListController {

    async handle(request: Request, response: Response){

        const { email} = request.body;
        const listRepository = new ListRepository();
        const result = await listRepository.execute({email});

        return response.json(result);
    }
}
