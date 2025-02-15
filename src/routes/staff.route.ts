import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import Staff_controller from "../controller/staff.controller";
import Authentication_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";

class StaffRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveStaff',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Staff_controller.saveStaff)
        this.router.get('/getAllStaffs',Authentication_Check.verifyToken,Staff_controller.getAllStaff)
        this.router.patch('/updateStaff',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Staff_controller.updateStaff)
        this.router.delete('/deleteStaff',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','ADMINISTRATIVE']),Staff_controller.deleteStaff)
    }
}
const StaffRouter = new StaffRoute();
export default StaffRouter;