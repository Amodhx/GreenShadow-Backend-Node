import {Router} from "express";

class EquipmentRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const EquipmentRouter = new EquipmentRoute();
export default EquipmentRouter