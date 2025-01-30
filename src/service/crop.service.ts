import CropModel from "../model/crop.model";
import cropDao from "../dao/impl/crop.dao";

class CropService{

    async saveCrop(cropObj:CropModel){
        return await cropDao.create(cropObj);
    }
    async deleteCrop(crop_id:string){

    }
    async updateCrop(cropObj:CropModel){

    }
    async getAllCrops(){

    }
}
const Crop_service = new CropService()
export default Crop_service