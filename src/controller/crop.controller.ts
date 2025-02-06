import Crop_service from "../service/crop.service";
import { Request, Response } from "express";
import multer from "multer";
import CropModel from "../model/crop.model";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });

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
            const model = new CropModel(
                data.crop_code,
                data.crop_common_name,
                data.crop_scientific_name,
                base64,
                data.category,
                data.season,
                data.field_code_list,
                data.logs_list);
            const savedCrop = await Crop_service.saveCrop(model);
            res.status(201).json(savedCrop);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
    async getAllCrops(req:Request,resp:Response){

    }
    async deleteCrop(req:Request,resp:Response){

    }
    async updateCrop(req:Request,resp:Response){

    }

}
const Crop_controller = new CropController();
export default Crop_controller