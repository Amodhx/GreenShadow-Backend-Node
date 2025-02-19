import {BaseDao} from "../base.dao";
import FieldModel from "../../model/field.model";
import prisma from "../../../prisma/client";
import {FieldDto} from "../../dto/field.dto";

class FieldDao implements BaseDao<FieldModel>{
    async create(dataObj: FieldModel) {
        try{
            const savedField = await prisma.field.create({
                data:{
                    field_code : dataObj.field_id,
                    field_name : dataObj.field_name,
                    field_location : dataObj.field_location,
                    extent_size : dataObj.extent_size,
                    field_image : dataObj.field_image,
                    field_staff_details : {
                        create : dataObj.staff_list.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    equipment_field_details : {
                        create : dataObj.equipments_list.map((equipment)=>({
                            equipment : {connect : {equipment_id : equipment}}
                        }))
                    }
                },
                include : {
                    field_staff_details : true,
                    equipment_field_details : true
                }
            })
            console.log(savedField)
            return savedField;
        }catch (err){
            throw err;
        }
    }

    async delete(id: string) {
        try {
            return await prisma.field.delete({
                where: {
                    field_code: id
                }
            });
        }catch (err){
            throw err;
        }
    }

    async findAll() {
        try {
            const fields = await prisma.field.findMany({
                include : {
                    crop_field_details : true,
                    equipment_field_details : true,
                    field_staff_details : true,
                    log_fiedls_details : true
                }
            });
            return fields.map((field)=>new FieldDto(field));
        }catch (err){
            throw err;
        }
    }

    async update(dataObj: FieldModel) {
        try{
            const savedField = await prisma.field.update({
                where : {
                    field_code : dataObj.field_id
                },
                data:{
                    field_name : dataObj.field_name,
                    field_location : dataObj.field_location,
                    extent_size : dataObj.extent_size,
                    field_image : dataObj.field_image,
                    field_staff_details : {
                        deleteMany : {},
                        create : dataObj.staff_list.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    equipment_field_details : {
                        deleteMany : {},
                        create : dataObj.equipments_list.map((equipment)=>({
                            equipment : {connect : {equipment_id : equipment}}
                        }))
                    }
                },
                include : {
                    field_staff_details : true,
                    equipment_field_details : true
                }
            })
            console.log(savedField)
            return savedField;
        }catch (err){
            throw err;
        }
    }
    async generateNextFieldId(){
        try {
            const fields = await prisma.field.findMany({
                select : {
                    field_code : true
                }
            });
            const sortedFields = fields
                .map((field)=>{
                    const numberPart = parseInt(field.field_code.split('-')[1]);
                    return {field_code : field.field_code,numberPart}
                })
                .sort((a,b) => b.numberPart-a.numberPart);
            if (sortedFields.length === 0){
                return "FIELD-1"
            }
            const lastIdNumber = sortedFields[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `FIELD-${nextIdNumber}`;
        }catch (err){
            throw err;
        }
    }

}
const Field_dao = new FieldDao();
export default Field_dao;