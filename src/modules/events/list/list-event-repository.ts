import { prisma } from "../../../core/database/prisma";

interface IListEvent{
    user_id: string;
}


export class ListEventRepository {

    async execute({user_id}: IListEvent) {

        const list_event = await prisma.events.findMany({
            where:{
                user_id: user_id,
            },
           select:{
               id:true,
               event_name:true,
               event_date:true,
           }
        });
    

        return list_event;
    }

}