import { prisma } from "../../../core/database/prisma";

interface ICreateParticipant {
    id_event: string;
    name_participant: string;
    email_participant: string;
}

export class CreateParticipantsRepository {

    async execute({ id_event, name_participant, email_participant }: ICreateParticipant) {

        const participantsExist = await prisma.participants.findUnique({
            where: {
                email: email_participant,
            },
        });


        if (!participantsExist) {
            const participant = await prisma.participants.create({
                data: {
                    name: name_participant,
                    email: email_participant,
                    events: {
                        create: {
                            events: {
                                connect: {
                                    id: id_event,
                                }
                            }
                        }
                    }
                },
            });
            return participant;
        }



        const participant = await prisma.participants.update({
            where: {
                email: email_participant,
            },
            data: {
                events: {
                    create:{
                        events:{
                            connect: {
                                id: id_event
                            }
                        }
                    }
                }
            }
        });
        return participant;

    }
}