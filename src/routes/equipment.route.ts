import {Router} from "express";
import Equipment_controller from "../controller/equipment.controller";
import Authentication_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";

class EquipmentRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveEquipment',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Equipment_controller.saveEquipment)
        this.router.get('/getAllEquipments',Authentication_Check.verifyToken,Equipment_controller.getAllEquipments)
        this.router.patch('/updateEquipment',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Equipment_controller.updateEquipment)
        this.router.delete('/deleteEquipment',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Equipment_controller.deleteEquipment)
    }
}
const EquipmentRouter = new EquipmentRoute();
export default EquipmentRouter