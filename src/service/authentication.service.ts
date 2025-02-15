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

    }
    async refreshToken(token:any){

    }
}
const Authentication_service = new AuthenticationService();
export default Authentication_service;