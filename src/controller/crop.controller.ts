import Crop_service from "../service/crop.service";
import {Request, Response} from "express";
import CropModel from "../model/crop.model";
import cropService from "../service/crop.service";

class CropController{

    async saveCrop(req: Request, res: Response): Promise<void> {
        try {
            if (!req.file) {
                res.status(400).json({ message: "No file uploaded" });
                return
            }
            const file = req.file;
            const base64 = file?.buffer.toString('base64');
            const data = req.body;
            if (!data.field_code_list){
                data.field_code_list = [];
            }else {
                data.field_code_list = data.field_code_list.split(',')
            }
            const model  =new CropModel(
                data.crop_code,
                data.crop_common_name,
                data.crop_scientific_name,
                base64,
                data.category,
                data.season,
                data.field_code_list,
                []
            );
            const savedCrop = await Crop_service.saveCrop(model);
            res.status(201).json(savedCrop);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
    async getAllCrops(req:Request,resp:Response){
        try {
            resp.status(201).send(await cropService.getAllCrops())
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async deleteCrop(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await cropService.deleteCrop(id))
            }
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async updateCrop(req:Request,resp:Response):Promise<void>{
        try {
            if (!req.file) {
                resp.status(400).json({ message: "No file uploaded" });
                return
            }
            const file = req.file;
            const base64 = file?.buffer.toString('base64');
            const data = req.body;
            if (!data.field_code_list){
                data.field_code_list = [];
            }else {
                data.field_code_list = data.field_code_list.split(',')
            }
            const model  =new CropModel(
                data.crop_code,
                data.crop_common_name,
                data.crop_scientific_name,
                base64,
                data.category,
                data.season,
                data.field_code_list,
                []
            );
            const savedCrop = await Crop_service.updateCrop(model);
            resp.status(201).json(savedCrop);
        } catch (err) {
            console.error(err);
            resp.status(500).send(err);
        }
    }

}
const Crop_controller = new CropController();
export default Crop_controller