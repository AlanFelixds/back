import prismaClient from './prisma/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginService {


    async execute(user: string, password: string ) {



        const userExist = await prismaClient.user.findFirst({
            where:{
                user: user,
            }
        });

        if(!userExist) { return "Usuário ou senha invalido"};
        
        const checkPassword = bcrypt.compareSync(password, userExist.password);
        if(!checkPassword) { return "Usuário ou senha invalido.." };


        const token = jwt.sign({user}, '123456', {subject: userExist.id, expiresIn: '60m'});

        console.log(token)
        return token;


    }
}


export { LoginService }