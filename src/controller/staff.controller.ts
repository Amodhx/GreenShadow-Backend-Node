import {Request, Response} from "express";
import staffService from "../service/staff.service";

class StaffController{
    async saveStaff(req:Request,resp:Response){
        try {
            resp.status(201).send(await staffService.saveStaff(req.body))
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async deleteStaff(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await staffService.deleteStaff(id))
            }
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async updateStaff(req:Request,resp:Response){
        try {
            resp.status(201).send(await staffService.updateStaff(req.body))
        }catch (err){
            console.log(err);
            resp.status(500).send(err);
        }
    }
    async getAllStaff(req:Request,resp:Response){
        try {
            resp.status(201).send(await staffService.getAllStaffs())
        }catch (err){
            resp.status(500).send(err);
        }
    }

}
const Staff_controller = new StaffController();
export default Staff_controller;