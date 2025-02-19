import {equipment_status} from "@prisma/client";

class EquipmentModel{
    equipment_id:string
    equipment_name:string
    type:string
    count:string
    status:equipment_status
    staff_list:string[]
    field_list:string[]


    constructor(equipment_id: string, equipment_name: string, type: string, count: string, status: equipment_status, staff_id_list: string[], field_code_list: string[]) {
        this.equipment_id = equipment_id;
        this.equipment_name = equipment_name;
        this.type = type;
        this.count = count;
        this.status = status;
        this.staff_list = staff_id_list;
        this.field_list = field_code_list;
    }
}
export default EquipmentModel;
