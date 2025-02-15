import {Router} from "express";
import Log_controller from "../controller/log.controller";
import multer from "multer";
import Authentication_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class LogRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveLog',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),upload.single('observe_image'),Log_controller.saveLog)
        this.router.get('/getAllLogs',Authentication_Check.verifyToken,Log_controller.getAllLogs)
        this.router.patch('/updateLog',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),upload.single('observe_image'),Log_controller.updateLog)
        this.router.delete('/deleteLog',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),Log_controller.deleteLog)
    }
}
const LogRouter = new LogRoute();
export default LogRouter
