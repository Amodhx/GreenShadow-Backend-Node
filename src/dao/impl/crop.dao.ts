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
                            field: { connect: { field_code: field } },
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
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const deletedCrop = await prisma.crop.delete({
                where: {
                    crop_code: id,
                },
            });
            console.log("Deleted Crop:", deletedCrop);
            return deletedCrop;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            return await prisma.crop.findMany({
                include : {
                    crop_field_details : true,
                    log_crop_details : true
                }
            });
        } catch (error) {
            throw error;
        }
    }
    async update(dataObj: CropModel) {
        try {
            const updatedCrop = await prisma.crop.update({
                where: {
                    crop_code: dataObj.crop_id,
                },
                data: {
                    category: dataObj.category,
                    crop_common_name: dataObj.crop_common_name,
                    crop_image: dataObj.crop_image,
                    crop_scientific_name: dataObj.crop_scientific_name,
                    season: dataObj.season,
                    crop_field_details: {
                        deleteMany: {},
                        create: dataObj.field_code_list.map((field) => ({
                            field : {connect : {field_code : field}}
                        })),
                    },
                },
                include: {
                    crop_field_details: true,
                },
            });
            console.log("Crop updated successfully:", updatedCrop);
            return updatedCrop;
        } catch (error) {
            throw error;
        }
    }

    async generateNextCropId() {
        try {
            const crops = await prisma.crop.findMany({
                select: {
                    crop_code: true,
                },
            });

            const sortedCrops = crops
                .map((crop) => {
                    const numberPart = parseInt(crop.crop_code.split('-')[1]);
                    return { crop_code: crop.crop_code, numberPart };
                })
                .sort((a, b) => b.numberPart - a.numberPart);

            if (sortedCrops.length === 0) {
                return 'CROP-1';
            }
            const lastIdNumber = sortedCrops[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `CROP-${nextIdNumber}`;
        } catch (error) {
            throw error;
        }
    }



}
const Crop_Dao =  new CropDao();
export default Crop_Dao;