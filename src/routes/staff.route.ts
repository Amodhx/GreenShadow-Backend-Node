import {Router} from "express";
import Crop_controller from "../controller/crop.controller";
import Staff_controller from "../controller/staff.controller";

class StaffRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveStaff',Staff_controller.saveStaff)
        this.router.get('/getAllStaffs',Staff_controller.getAllStaff)
        this.router.patch('/updateStaff',Staff_controller.updateStaff)
        this.router.delete('/deleteStaff',Staff_controller.deleteStaff)
    }
}
const StaffRouter = new StaffRoute();
export default StaffRouter;