import FieldModel from "../model/field.model";
import fieldDao from "../dao/impl/field.dao";
import {FieldDto} from "../dto/field.dto";

class FieldService{
    async saveField(fieldObj:FieldModel){
        try {
            fieldObj.field_id = await fieldDao.generateNextFieldId();
            return await fieldDao.create(fieldObj);
        }catch (err){
            throw err;
        }

    }
    async updateField(fieldObj:FieldModel){
        try {
            return await fieldDao.update(fieldObj);
        }catch (err){
            throw err;
        }
    }
    async deleteField(field_id:string){
        try {
            return await fieldDao.delete(field_id);
        }catch (err){
            throw err
        }
    }
    async getAllFields(){
        try {
            const fields:FieldDto[] = await fieldDao.findAll();
            let fieldsToReturn:FieldModel[] = [];
            fields.map((field : FieldDto)=>{
                let staffIds = field.field_staff_details.map((fieldStaff) => fieldStaff.staff_id)
                let cropIds = field.crop_field_details.map((fieldCrop) => fieldCrop.crop_code);
                let logIds = field.log_fiedls_details.map((logField) => logField.log_code);
                let equipmentIds = field.equipment_field_details.map((equipmentField)=>equipmentField.equipment_id);

                fieldsToReturn.push(new FieldModel(
                    field.field_code,
                    field.field_name || '',
                    field.field_location || '',
                    field.extent_size || '',
                    staffIds,
                    cropIds,
                    field.field_image,
                    logIds,
                    equipmentIds
                ))
            })

            return fieldsToReturn;
        }catch (err){
            throw err
        }
    }

}
const Field_service = new
    FieldService();
export default Field_service;