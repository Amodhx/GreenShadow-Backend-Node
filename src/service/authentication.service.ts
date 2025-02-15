import UserModel from "../model/user.model";
import prisma from "../../prisma/client";

const jwt = require('jsonwebtoken');

class AuthenticationService{

    async signIn(userObj:UserModel){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const userMail = userObj.email;
        const userData : any = await prisma.user.findUnique({
            where : {
                email : userMail
            }
        })
        if (!userData){
            throw new Error("INVALID USER")
        }
        if (userObj.password != userData.password){
            throw new Error("INVALID PASSWORD")
        }
        return jwt.sign({userId: userObj.email}, jwtSecretKey, {
            expiresIn: '1h'
        })
    }
    async signUp(userObj:UserModel){
        try {
            const existingUser = await prisma.user.findUnique({
                where: { user_id: userObj.user_id },
            });
            const isUserNameValid = await prisma.user.findUnique({
                where : {
                    email : userObj.email
                }
            })
            if (existingUser || isUserNameValid){
                if (existingUser){
                    throw new Error("USER ID IS INVALID")
                }else {
                    throw new Error("USER NAME IS INVALID")
                }
            }

            return await prisma.user.create({
                data : {
                    user_id : userObj.user_id,
                    email : userObj.email,
                    password : userObj.password,
                    role : userObj.role
                }
            })
        }catch (err){
            throw err;
        }
    }
    async refreshToken(token:any){

    }
}
const Authentication_service = new AuthenticationService();
export default Authentication_service;