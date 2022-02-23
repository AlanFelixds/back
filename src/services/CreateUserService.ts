import prismaClient from './prisma/index';

class CreateUserService {


    async execute(user: string, password: string, email: string ) {

        const createUser = await prismaClient.user.create({
            data:{
                user,
                password,
                email,
            }
        });

        return createUser;
    }
}


export { CreateUserService }