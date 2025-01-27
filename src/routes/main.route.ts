import {Router} from "express";

class MainRoute{
    router :Router

    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const MainRouter = new MainRoute();
export default MainRouter