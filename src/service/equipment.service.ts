import EquipmentModel from "../model/equipment.model";
import equipmentDao from "../dao/impl/equipment.dao";

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
            return await equipmentDao.findAll();
        }catch (err){
            throw err;
        }
    }
}
const Equipment_service = new EquipmentService();
export default Equipment_service;