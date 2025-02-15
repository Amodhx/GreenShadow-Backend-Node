import {Router} from "express";

class AuthRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}
const AuthRouter = new AuthRoute();
export default AuthRouter;