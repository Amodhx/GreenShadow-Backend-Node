import Authentication_service from "../service/authentication.service";
import {Request, Response} from "express";

class AuthenticationController{
    async signIn(req:Request,resp:Response){
        try {
            resp.status(201).send(await Authentication_service.signIn(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async signUp(req:Request,resp:Response){
        try {
            resp.status(201).send(await Authentication_service.signUp(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async refreshToken(req:Request,resp:Response){
        try {
            let token ;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
                token = req.headers.authorization.split(' ')[1]
            }
            if (!token){
                resp.status(401).json({message : "You are not logged in! Please log in to get access"})
                return
            }
            resp.status(201).send(await Authentication_service.refreshToken(token))
        }catch (err){
            resp.status(500).send(err);
        }
    }

}
const Authentication_controller = new AuthenticationController();
export default Authentication_controller;