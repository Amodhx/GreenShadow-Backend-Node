import {Router} from "express";
import Equipment_controller from "../controller/equipment.controller";

class EquipmentRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveEquipment',Equipment_controller.saveEquipment)
        this.router.get('/getAllEquipments',Equipment_controller.getAllEquipments)
        this.router.patch('/updateEquipment',Equipment_controller.updateEquipment)
        this.router.delete('/deleteEquipment',Equipment_controller.deleteEquipment)
    }
}
const EquipmentRouter = new EquipmentRoute();
export default EquipmentRouter