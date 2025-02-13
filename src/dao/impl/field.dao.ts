import {BaseDao} from "../base.dao";
import FieldModel from "../../model/field.model";
import prisma from "../../../prisma/client";

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

    delete(id: string) {

    }

    findAll() {
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

}
const Field_dao = new FieldDao();
export default Field_dao;