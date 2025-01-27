import {Router} from "express";

class VehicleRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const VehicleRouter = new VehicleRoute();
export default VehicleRouter;
