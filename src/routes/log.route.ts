import {Router} from "express";

class LogRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const LogRouter = new LogRoute();
export default LogRouter
