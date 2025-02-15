import {Request, Response} from "express";
import vehicleService from "../service/vehicle.service";

class VehicleController{
    async saveVehicle(req:Request,resp:Response){
        try {
            resp.status(201).send(await vehicleService.saveVehicle(req.body))
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async updateVehicle(req:Request,resp:Response){
        try {
            resp.status(201).send(await vehicleService.updateVehicle(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err)
        }
    }
    async getAllVehicles(req:Request,resp:Response){
        try {
            resp.status(201).send(await vehicleService.getAllVehicles())
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteVehicle(req:Request,resp:Response){
        try {
            try {
                const  id = req.query['id'];
                if (typeof id === "string") {
                    resp.status(201).send(await vehicleService.deleteVehicle(id))
                }
            }catch (err){
                resp.status(500).send(err);
            }
        }catch (err){
            resp.status(500).send(err)
        }
    }
}
const Vehicle_controller = new VehicleController();
export default Vehicle_controller;