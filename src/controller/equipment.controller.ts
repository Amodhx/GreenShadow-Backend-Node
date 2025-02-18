import {Request, Response} from "express";
import equipmentService from "../service/equipment.service";

class EquipmentController{
    async saveEquipment(req:Request,resp:Response){
        try {
            resp.status(201).send(await equipmentService.saveEquipment(req.body))
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async deleteEquipment(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await equipmentService.deleteEquipment(id))
            }
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async updateEquipment(req:Request,resp:Response){
        try {
            resp.status(201).send(await equipmentService.updateEquipment(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async getAllEquipments(req:Request,resp:Response){
        try {
            resp.status(201).send(await equipmentService.getAllEquipments())
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
const Equipment_controller = new EquipmentController();
export default Equipment_controller