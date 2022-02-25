import  { Request, Response} from 'express';

class CreateEventController {


    async handle(request: Request, response: Response){

        // const {name, date, participants } = request.body;
        const event = request.body;
        console.log(event);
    }
}