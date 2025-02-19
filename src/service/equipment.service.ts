import EquipmentModel from "../model/equipment.model";
import equipmentDao from "../dao/impl/equipment.dao";
import {EquipmentDto} from "../dto/equipment.dto";
import fieldModel from "../model/field.model";
import {equipment_status} from "@prisma/client";

class EquipmentService{
    async saveEquipment(equipmentObj:EquipmentModel){
        try {
            equipmentObj.equipment_id = await equipmentDao.generateNextEquipmentId();
            return await equipmentDao.create(equipmentObj);
        }catch (err){
            throw err;
        }

    }
    async updateEquipment(equipmentObj:EquipmentModel){
        try {
            return await equipmentDao.update(equipmentObj);
        }catch (err){
            throw err;
        }
    }
    async deleteEquipment(equipment_id:string){
        try {
            return await equipmentDao.delete(equipment_id);
        }catch (err){
            throw err;
        }
    }
    async getAllEquipments(){
        try {
            const equipments :EquipmentDto[] = await equipmentDao.findAll();
            let equipmentsToReturn : EquipmentModel[] = [];
            equipments.map((equipment :EquipmentDto) =>{
                let staffIds = equipment.equipment_staff_details.map((staff) => staff.staff_id)
                let fieldIds = equipment.equipment_field_details.map((field) => field.field_code);
                equipmentsToReturn.push(new EquipmentModel(
                    equipment.equipment_id,
                    equipment.equipment_name || '',
                    equipment.type || '',
                    equipment.count || '',
                    equipment.status as equipment_status,
                    staffIds,
                    fieldIds
                ))
            })
            return equipmentsToReturn;
        }catch (err){
            throw err;
        }
    }
}
const Equipment_service = new EquipmentService();
export default Equipment_service;