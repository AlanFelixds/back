import { prisma } from "../../../core/database/prisma";

interface ICreateEvent {
    name: string;
    date_event: Date;
}

export class CreateEventRepository {

    async execute({name, date_event}: ICreateEvent){
     
        const event = await prisma.events.create({
            data:{
                name,
                date_event,
                user:{}
            }
        });

        // return event;
    }
}