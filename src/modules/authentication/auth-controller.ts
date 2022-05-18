import { Request, Response } from "express";
import { AuthRepository } from "./auth-repository";

export class AuthController {

    async handle(request: Request, response: Response){


        const { email, password} = request.body;

        const authRepository = new AuthRepository();
        const result = await authRepository.execute({
            email, password,
        })

        return response.json(result);
    }
}