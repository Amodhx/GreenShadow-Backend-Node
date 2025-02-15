import jwt from 'jsonwebtoken'
import prisma from "../../prisma/client";
import {NextFunction, Request, Response} from "express";
class Authentication {
    async verifyToken(req:Request,resp:Response,next:NextFunction){
        const SECRET_KEY = process.env.JWT_SECRET_KEY || "default_secret";
        let token ;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }
        if (!token){
            resp.status(401).json({message : "You are not logged in! Please log in to get access"})
            return
        }
        let decoded : any;
        let currentUser : any;
        try {
            decoded = await jwt.verify(token, SECRET_KEY);
            console.log(decoded)
            currentUser = await prisma.user.findUnique({
                where : {
                    email : decoded.userId
                }
            })
            if (!currentUser){
                resp.status(401).json({message : "The user belonging to this email does not exist"})
                return
            }
            (req as any).user = currentUser;
            next()
        }catch (err){
            resp.status(401).send("Token Is Expired")
            return
        }
    }
}
const Authentication_Check = new Authentication();
export default Authentication_Check;