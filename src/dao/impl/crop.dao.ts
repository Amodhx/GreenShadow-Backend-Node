import {BaseDao} from "../base.dao";
import CropModel from "../../model/crop.model";
import prisma from "../../../prisma/client";


class CropDao implements BaseDao<CropModel>{
    async create(dataObj: CropModel) {
        try {
            const newCrop = await prisma.crop.create({
                data: {
                    crop_code: dataObj.crop_id,
                    category: dataObj.category,
                    crop_common_name: dataObj.crop_common_name,
                    crop_image: dataObj.crop_image,
                    crop_scientific_name: dataObj.crop_scientific_name,
                    season: dataObj.season,
                    crop_field_details: {
                        create: dataObj.field_code_list.map((field) => ({
                            field_code: field,
                        })),
                    },
                },
                include: {
                    crop_field_details: true,
                },
            });
            console.log("Crop saved successfully:", newCrop);
            return newCrop;
        } catch (error) {
            console.error("Error saving crop:", error);
            throw error;
        }
    }

    delete(id: number) {
    }

    findAll() {
    }

    update(dataObj: CropModel) {
    }


}
const Crop_Dao =  new CropDao();
export default Crop_Dao;