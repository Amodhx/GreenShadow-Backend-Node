import FieldModel from "../model/field.model";
import fieldDao from "../dao/impl/field.dao";

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
            return await fieldDao.findAll();
        }catch (err){
            throw err
        }
    }

}
const Field_service = new
    FieldService();
export default Field_service;