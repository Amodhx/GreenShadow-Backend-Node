import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import multer from "multer";
import CropController from "../controller/crop.controller";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class CropRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveCrop', upload.single("crop_image"), Crop_controller.saveCrop);
        this.router.get('/getAllCrops',Crop_controller.getAllCrops)
        this.router.patch('/updateCrop',Crop_controller.updateCrop)
        this.router.delete('/deleteCrop',Crop_controller.deleteCrop)
    }
}
const CropRouter = new CropRoute();
export default CropRouter;