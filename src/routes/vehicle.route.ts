import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import Vehicle_controller from "../controller/vehicle.controller";
import VehicleController from "../controller/vehicle.controller";
import Authentication_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";

class VehicleRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveVehicle',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Vehicle_controller.saveVehicle)
        this.router.get('/getAllVehicle',Authentication_Check.verifyToken,Vehicle_controller.getAllVehicles)
        this.router.patch('/updateVehicle',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Vehicle_controller.updateVehicle)
        this.router.delete('/deleteVehicle',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Vehicle_controller.deleteVehicle)
    }
}
const VehicleRouter = new VehicleRoute();
export default VehicleRouter;
