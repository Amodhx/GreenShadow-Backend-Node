import {Router} from "express";
import CropRouter from "./crop.route";
import EquipmentRouter from "./equipment.route";
import FieldRouter from "./field.route";
import LogRouter from "./log.route";
import StaffRouter from "./staff.route";
import VehicleRouter from "./vehicle.route";

class MainRoute{
    router :Router

    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.use('/crop',CropRouter.router)
        this.router.use('/equipment',EquipmentRouter.router)
        this.router.use('/field',FieldRouter.router)
        this.router.use('/log',LogRouter.router)
        this.router.use('/staff',StaffRouter.router)
        this.router.use('/vehicle',VehicleRouter.router)

    }
}
const MainRouter = new MainRoute();
export default MainRouter