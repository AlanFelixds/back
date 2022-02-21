import prismaClient from './prisma/index';


class LoginService {


    async execute(user: string, password: string ) {
        const authenticationUser = await prismaClient.user.findFirst({
            where:{
                user: user,
                password: password,
            }
        });
        console.log(authenticationUser);
        return authenticationUser;
    }
}


export { LoginService }