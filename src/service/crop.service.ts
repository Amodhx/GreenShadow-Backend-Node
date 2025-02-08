import CropModel from "../model/crop.model";
import cropDao from "../dao/impl/crop.dao";

class CropService{

    async saveCrop(cropObj:CropModel){
        try {
            cropObj.crop_id = await cropDao.generateNextCropId();
            return await cropDao.create(cropObj);
        }catch (err){
            throw err;
        }
    }
    async deleteCrop(crop_id:string){
        try {
            return await cropDao.delete(crop_id);
        }catch (err){
            throw err;
        }
    }
    async updateCrop(cropObj:CropModel){
        try {
            return await cropDao.update(cropObj);
        }catch (err){
            throw err;
        }
    }
    async getAllCrops(){
        try {
            return await cropDao.findAll();
        }catch (err){
            throw err;
        }
    }
}
const Crop_service = new CropService()
export default Crop_service