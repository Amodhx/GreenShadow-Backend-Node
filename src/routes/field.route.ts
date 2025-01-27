import {Router} from "express";
import Field_controller from "../controller/field.controller";

class FieldRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveField',Field_controller.saveField)
        this.router.get('/getAllField',Field_controller.getAllFields)
        this.router.patch('/updateField',Field_controller.updateField)
        this.router.delete('/deleteField',Field_controller.deleteField)
    }
}
const FieldRouter = new FieldRoute();
export default FieldRouter;