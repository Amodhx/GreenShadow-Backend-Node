import FieldModel from "../model/field.model";
import fieldDao from "../dao/impl/field.dao";

class FieldService{
    async saveField(fieldObj:FieldModel){
        try {
            fieldObj.field_id = "FIELD-2"
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

    }
    async getAllFields(){

    }

}
const Field_service = new
    FieldService();
export default Field_service;