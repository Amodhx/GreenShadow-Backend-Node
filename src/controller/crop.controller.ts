import Crop_service from "../service/crop.service";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });

class CropController{

    async saveCrop(req:Request,resp:Response){
        try {
            console.log(req.file)
            console.log(req.body)
            resp.status(201).send(await Crop_service.saveCrop(req.body));
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllCrops(req:Request,resp:Response){

    }
    async deleteCrop(req:Request,resp:Response){

    }
    async updateCrop(req:Request,resp:Response){

    }

}
const CropControllerInstance = new CropController();

export default {
    saveCrop: [upload.single("crop_image"), CropControllerInstance.saveCrop.bind(CropControllerInstance)],
    getAllCrops: CropControllerInstance.getAllCrops.bind(CropControllerInstance),
    deleteCrop: CropControllerInstance.deleteCrop.bind(CropControllerInstance),
    updateCrop: CropControllerInstance.updateCrop.bind(CropControllerInstance),
};