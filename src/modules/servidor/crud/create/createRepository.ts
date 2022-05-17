import { prisma } from "../../../../core/database/prisma";
import { hash } from "bcrypt";

interface ICreateServidor {
    email: string;
    password: string;
}

export class CreateRepository {

    async execute({email, password}: ICreateServidor){


        const servidorExist = await prisma.servidor.findFirst({
            where:{
                email,
            }
        });

        if(servidorExist){
            throw new Error("Servidor já cadastrado");
        }

        const hashPassword = await hash(password, 10);

        const servidor = await prisma.servidor.create({
            data:{
                email,
                password: hashPassword,
            }
        });

        return servidor;
    }
}