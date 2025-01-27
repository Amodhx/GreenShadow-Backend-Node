import {Router} from "express";
import Log_controller from "../controller/log.controller";

class LogRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveLog',Log_controller.saveLog)
        this.router.get('/getAllLogs',Log_controller.getAllLogs)
        this.router.patch('/updateLog',Log_controller.updateLog)
        this.router.delete('/deleteLog',Log_controller.deleteLog)
    }
}
const LogRouter = new LogRoute();
export default LogRouter
