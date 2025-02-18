import {BaseDao} from "../base.dao";
import EquipmentModel from "../../model/equipment.model";
import prisma from "../../../prisma/client";
import {equipment_status} from "@prisma/client";

class EquipmentDao implements BaseDao<EquipmentModel>{
    async create(dataObj: EquipmentModel) {
        try {
            const savedEquipment = await prisma.equipment.create({
                data : {
                    equipment_id : dataObj.equipment_id,
                    equipment_name : dataObj.equipment_name,
                    count : dataObj.count,
                    type : dataObj.type,
                    status :dataObj.status as unknown as equipment_status,
                    equipment_field_details : {
                        create : dataObj.field_list.map((field:any)=>({
                            field : {connect : {field_code : field}}
                        }))
                    },
                    equipment_staff_details : {
                        create : dataObj.staff_list.map((staff:any)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    }
                },
                include : {
                    equipment_field_details : true,
                    equipment_staff_details : true
                }
            })

            console.log("Saved Equipment Value:  "+savedEquipment)
            return savedEquipment;
        }catch (err){
            throw err;
        }
    }

    async delete(id: string) {
        try{
            const deletedEquipment = await prisma.equipment.delete(
                {
                    where : {
                        equipment_id : id
                    }
                }
            )
            console.log("DELETED EQUIPMENT : "+ deletedEquipment)
            return deletedEquipment;
        }catch (err){
            throw err;
        }
    }

    async findAll() {
        try {
            return await prisma.equipment.findMany({
                include : {
                    equipment_field_details : true,
                    equipment_staff_details : true
                }
            });
        }catch (err){
            throw err;
        }
    }

    async update(dataObj: EquipmentModel) {
        try {
            console.log("DATA:  : "+dataObj.staff_list)
            console.log("DATA:  : "+dataObj.field_list)
            return await prisma.equipment.update({
                where: {
                    equipment_id: dataObj.equipment_id
                },
                data: {
                    equipment_name: dataObj.equipment_name,
                    count: dataObj.count,
                    type: dataObj.type,
                    status: dataObj.status as unknown as equipment_status,
                    equipment_field_details: {
                        deleteMany: {},
                        create: dataObj.field_list.map((field) => ({
                            field : {connect : {field_code : field}}
                        }))
                    },
                    equipment_staff_details: {
                        deleteMany: {},
                        create: dataObj.staff_list.map((staff) => ({
                            staff : {connect : {staff_id : staff}}
                        }))
                    }
                },
                include: {
                    equipment_field_details: true,
                    equipment_staff_details: true
                }
            });
        }catch (err){
            throw err;
        }
    }
    async generateNextEquipmentId(){
        try {
            const equipments = await prisma.equipment.findMany({
                select : {
                    equipment_id : true
                }
            });
            const sortedEquipments = equipments
                .map((equipment) =>{
                    const numberPart = parseInt(equipment.equipment_id.split('-')[1]);
                    return { equipment_id: equipment.equipment_id, numberPart };
                })
                .sort((a,b) => b.numberPart - a.numberPart);
            if (sortedEquipments.length === 0){
                return "EQUIPMENT-1"
            }
            const lastIdNumber = sortedEquipments[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `EQUIPMENT-${nextIdNumber}`;

        }catch (err){
            throw err;
        }
    }

}
const equipmentDao = new EquipmentDao();
export default equipmentDao;