import {Router} from "express";
import Crop_controller from "../controller/crop.controller";

class CropRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveCrop',Crop_controller.saveCrop)
        this.router.get('/getAllCrops',Crop_controller.getAllCrops)
        this.router.patch('/updateCrop',Crop_controller.updateCrop)
        this.router.delete('/deleteCrop',Crop_controller.deleteCrop)
    }
}
const CropRouter = new CropRoute();
export default CropRouter;