import {Router} from "express";
import Log_controller from "../controller/log.controller";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class LogRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveLog',upload.single('observe_image'),Log_controller.saveLog)
        this.router.get('/getAllLogs',Log_controller.getAllLogs)
        this.router.patch('/updateLog',upload.single('observe_image'),Log_controller.updateLog)
        this.router.delete('/deleteLog',Log_controller.deleteLog)
    }
}
const LogRouter = new LogRoute();
export default LogRouter
