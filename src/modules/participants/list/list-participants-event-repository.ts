import { prisma } from "../../../core/database/prisma";

interface IListParticipantEvent{
    event_id: string;
}


export class ListParticipantsEventRepository{

    async execute({event_id}: IListParticipantEvent){

        const result = await prisma.participants.findMany({
            where:{
                events:{
                    some:{
                        events_id: event_id,

                    },

                }
            }
        });


        return result;
    }
    
}