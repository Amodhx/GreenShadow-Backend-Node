import {Router} from "express";
import Field_controller from "../controller/field.controller";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class FieldRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveField',upload.single('field_image'),Field_controller.saveField)
        this.router.get('/getAllField',Field_controller.getAllFields)
        this.router.patch('/updateField',upload.single('field_image'),Field_controller.updateField)
        this.router.delete('/deleteField',Field_controller.deleteField)
    }
}
const FieldRouter = new FieldRoute();
export default FieldRouter;