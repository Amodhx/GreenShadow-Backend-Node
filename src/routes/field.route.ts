import {Router} from "express";

class FieldRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const FieldRouter = new FieldRoute();
export default FieldRouter;