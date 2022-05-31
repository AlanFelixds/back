import { prisma } from "../../../core/database/prisma";

interface ICreateEvent {
    event_name: string;
    event_date: Date;
    user_email: string;
}

export class CreateEventRepository {

    async execute({ event_name, event_date, user_email}: ICreateEvent) {

        console.log(event_name, event_date, user_email);


        const event = await prisma.events.create({
            data:{
                event_name,
                event_date,
                user:{
                    connect:{
                        id: user_email
                    }
                }
            }
        });

        return event;
    }
}