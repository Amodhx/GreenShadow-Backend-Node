import {Router} from "express";
import AuthenticationController from "../controller/authentication.controller";
import Auth_Check from "../middleware/auth";

class AuthRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/signIn',AuthenticationController.signIn)
        this.router.post('/signUp',Auth_Check.verifyToken,AuthenticationController.signUp)
        this.router.post('/refresh',AuthenticationController.refreshToken)
    }
}
const AuthRouter = new AuthRoute();
export default AuthRouter;