import Crop_service from "../service/crop.service";

class CropController{

    async saveCrop(req,resp){
        resp.status(201).send(await Crop_service.saveCrop(req.body));
    }
    async getAllCrops(req,resp){

    }
    async deleteCrop(req,resp){

    }
    async updateCrop(req,resp){

    }

}
const Crop_controller = new CropController();
export default Crop_controller