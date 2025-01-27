import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import Vehicle_controller from "../controller/vehicle.controller";
import VehicleController from "../controller/vehicle.controller";

class VehicleRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveVehicle',Vehicle_controller.saveVehicle)
        this.router.get('/getAllVehicle',Vehicle_controller.getAllVehicles)
        this.router.patch('/updateVehicle',Vehicle_controller.updateVehicle)
        this.router.delete('/deleteVehicle',Vehicle_controller.deleteVehicle)
    }
}
const VehicleRouter = new VehicleRoute();
export default VehicleRouter;
