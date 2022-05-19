import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../core/database/prisma';

interface IAuthRepository{
    email: string;
    password: string;
}

export class AuthRepository {

    async execute({email, password} : IAuthRepository){


        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })


        if (!user) {
            throw new Error("Email or password invalid");
        }
        
        const compareMatch = await compare(password, user.password);
        if(!compareMatch){
            throw new Error("Email or password invalid");
        }

        const token = sign({ user_name: user.name, user_email: user.email, user_role: user.role}, "12345", { subject: user.id, expiresIn: "1d"});


        return token;

    }
}