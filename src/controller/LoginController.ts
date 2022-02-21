import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";



class LoginController {

    async handle(request: Request, response: Response){
        const {user, password} =  request.body;
        const service = new LoginService();
        const result = await service.execute(user, password);

        return response.json(result);
    }
}


export { LoginController };