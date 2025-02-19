import CropModel from "../model/crop.model";
import cropDao from "../dao/impl/crop.dao";
import {CropDto} from "../dto/crop.dto";

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
            const crops:CropDto[] = await cropDao.findAll();
            let cropsToReturn:CropModel[] = [];
            crops.map((crop:CropDto) =>{
                let fieldIds = crop.crop_field_details.map((field)=> field.field_code);

                cropsToReturn.push(
                    new CropModel(
                        crop.crop_code,
                        crop.crop_common_name || '',
                        crop.crop_scientific_name || '',
                        crop.crop_image,
                        crop.category,
                        crop.season,
                        fieldIds,
                        []
                    )
                )
            })

            return cropsToReturn;

        }catch (err){
            throw err;
        }
    }
}
const Crop_service = new CropService()
export default Crop_service