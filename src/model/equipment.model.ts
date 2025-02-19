import {equipment_status} from "@prisma/client";

class EquipmentModel{
    equipment_id:string
    equipment_name:string
    type:string
    count:string
    status:equipment_status
    equipment_staff_details:string[]
    equipment_field_details:string[]


    constructor(equipment_id: string, equipment_name: string, type: string, count: string, status: equipment_status, staff_id_list: string[], field_code_list: string[]) {
        this.equipment_id = equipment_id;
        this.equipment_name = equipment_name;
        this.type = type;
        this.count = count;
        this.status = status;
        this.equipment_staff_details = staff_id_list;
        this.equipment_field_details = field_code_list;
    }
}
export default EquipmentModel;
