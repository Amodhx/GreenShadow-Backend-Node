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

    }

}
const Authentication_controller = new AuthenticationController();
export default Authentication_controller;