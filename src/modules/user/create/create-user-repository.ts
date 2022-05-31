import { prisma } from "../../../core/database/prisma";
import { hash } from "bcrypt";

interface ICreateServidor {
    name: string;
    email: string;
    password: string;
}

export class CreateRepository {

    async execute({name, email, password}: ICreateServidor){


        const servidorExist = await prisma.user.findFirst({
            where:{
                email,
            }
        });

        if(servidorExist){
            throw new Error("Servidor já cadastrado");
        }

        const hashPassword = await hash(password, 10);


        try {
            await prisma.user.create({
                data:{
                    name,
                    email,
                    password: hashPassword,
                }
            });
            return "Usuario criado";
        } catch (error) {
            console.log("Erro ao criar usuario");
        }
        
        
    }
}