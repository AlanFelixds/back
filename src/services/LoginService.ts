import prismaClient from './prisma/index';
import bcrypt from 'bcrypt';

class LoginService {


    async execute(user: string, password: string ) {


        const userdb = await prismaClient.user.findFirst({
            where:{
                user: user,
            }
        });

        if(userdb == null) return "usuário não encontrado";
        const checkPassword = bcrypt.compareSync(password, userdb.password);

        if(checkPassword == false) return "usuario não encontrado";
        if(checkPassword == true) return userdb;

    }
}


export { LoginService }