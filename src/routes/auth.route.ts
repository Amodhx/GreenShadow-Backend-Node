import {Router} from "express";
import AuthenticationController from "../controller/authentication.controller";
import Auth_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";
import Authentication_Check from "../middleware/authentication";

class AuthRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/signIn',AuthenticationController.signIn)
        this.router.post('/signUp',Authentication_Check.verifyToken,AuthenticationController.signUp)
        this.router.post('/refresh',AuthenticationController.refreshToken)
    }
}
const AuthRouter = new AuthRoute();
export default AuthRouter;