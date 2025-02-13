import {Request, Response} from "express";
import Field_service from "../service/field.service";
import FieldModel from "../model/field.model";
import fieldService from "../service/field.service";

class FieldController{
    async saveField(req:Request,resp:Response){
        try {
            if (!req.file){
                resp.status(400).json({message : 'No File Uploaded!'})
                return
            }
            const file = req.file;
            const base64 = file?.buffer.toString('base64');
            const data = req.body;

            if (!data.staff_list){
                data.staff_list = [];
            }else {
                data.staff_list = data.staff_list.split(',')
            }
            if (!data.crop_list){
                data.crop_list = [];
            }else {
                data.crop_list = data.crop_list.split(',')
            }
            if (!data.equipments_list){
                data.equipments_list = []
            }else {
                data.equipments_list = data.equipments_list.split(',')
            }

            const model = new FieldModel(
                data.field_code,
                data.field_name,
                data.field_location,
                data.extent_size,
                data.staff_list,
                data.crop_list,
                base64,
                [],
                data.equipments_list

            )

            const savedCrop = await fieldService.saveField(model);
            resp.status(201).send(savedCrop);
        }catch (err){
            console.log(err);
            resp.status(500).send(err);
        }
    }
    async updateField(req:Request,resp:Response){

    }
    async deleteField(req:Request,resp:Response){

    }
    async getAllFields(req:Request,resp:Response){

    }
}
const Field_controller = new FieldController();
export default Field_controller