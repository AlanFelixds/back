import { prisma } from "../../../core/database/prisma";

interface ICreateServidor {
    email: string;
}

export class ListRepository {

    async execute({ email}: ICreateServidor){


        const servidorExist = await prisma.user.findUnique({
            where:{
                email,
            }
        });


        return servidorExist;
    }
}