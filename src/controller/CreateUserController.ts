import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import bcrypt from 'bcrypt';


class CreateUserController {

    async handle(request: Request, response: Response){
        const {user, password, email} =  request.body;
        const service = new CreateUserService();
        
        const hashWord = await bcrypt.hash(password, 10);
        const result = await service.execute(user, hashWord, email);

        return response.json(result);
    }
}


export { CreateUserController };