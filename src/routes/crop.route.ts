import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import multer from "multer";
import Auth from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";
import Auth_Check from "../middleware/authentication";
import Authentication_Check from "../middleware/authentication";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class CropRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveCrop',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER']), upload.single("crop_image"), Crop_controller.saveCrop);
        this.router.get('/getAllCrops',Crop_controller.getAllCrops)
        this.router.patch('/updateCrop',upload.single("crop_image"),Crop_controller.updateCrop)
        this.router.delete('/deleteCrop',Crop_controller.deleteCrop)
    }
}
const CropRouter = new CropRoute();
export default CropRouter;