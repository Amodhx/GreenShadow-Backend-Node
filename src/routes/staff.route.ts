import {Router} from "express";

class StaffRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const StaffRouter = new StaffRoute();
export default StaffRouter;