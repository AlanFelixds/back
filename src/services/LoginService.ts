import prismaClient from './prisma/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { json } from 'express';

class LoginService {


    async execute(user: string, password: string ) {


        try {
            const userExist = await prismaClient.user.findFirst({
                where:{
                    user: user,
                }
            });
    
            if(userExist) { 
                const checkPassword = bcrypt.compareSync(password, userExist.password);
                if(checkPassword) { 
                    const token = jwt.sign({user}, '123456', {subject: userExist.id, expiresIn: '60m'});
                    return ({'token': token});
                };
            };

            return ({'error': 'Usuário ou senha invalidos....'});
        } catch (error) {
            console.log('Error 1:'+error);
        }
        

        // console.log(token)


    }
}


export { LoginService }