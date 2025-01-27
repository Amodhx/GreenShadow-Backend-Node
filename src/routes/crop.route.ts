import {Router} from "express";

class CropRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const CropRouter = new CropRoute();
export default CropRouter;