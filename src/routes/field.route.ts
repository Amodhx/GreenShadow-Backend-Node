import {Router} from "express";
import Field_controller from "../controller/field.controller";
import multer from "multer";
import Authentication_Check from "../middleware/authentication";
import Authorization_check from "../middleware/authorization";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });
class FieldRoute{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveField',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),upload.single('field_image'),Field_controller.saveField)
        this.router.get('/getAllField',Authentication_Check.verifyToken,Field_controller.getAllFields)
        this.router.patch('/updateField',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),upload.single('field_image'),Field_controller.updateField)
        this.router.delete('/deleteField',Authentication_Check.verifyToken,Authorization_check.checkRoles(['MANAGER','SCIENTIST']),Field_controller.deleteField)
    }
}
const FieldRouter = new FieldRoute();
export default FieldRouter;