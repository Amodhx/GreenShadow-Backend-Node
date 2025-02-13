import {Request, Response} from "express";
import Field_service from "../service/field.service";
import FieldModel from "../model/field.model";
import fieldService from "../service/field.service";
import cropService from "../service/crop.service";

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

            const savedField = await fieldService.saveField(model);
            resp.status(201).send(savedField);
        }catch (err){
            console.log(err);
            resp.status(500).send(err);
        }
    }
    async updateField(req:Request,resp:Response){
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

            const updatedField = await fieldService.updateField(model);
            resp.status(201).send(updatedField);
        }catch (err){
            console.log(err);
            resp.status(500).send(err);
        }
    }
    async deleteField(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await fieldService.deleteField(id))
            }
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async getAllFields(req:Request,resp:Response){
        try {
            resp.status(201).send(await fieldService.getAllFields())
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
const Field_controller = new FieldController();
export default Field_controller