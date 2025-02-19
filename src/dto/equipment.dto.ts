export class EquipmentDto {
    equipment_id!: string;
    count?: string;
    equipment_name?: string;
    status?: string;
    type?: string;
    equipment_field_details!: EquipmentFieldDetailsDTO[];
    equipment_staff_details!: EquipmentStaffDetailsDTO[];

    constructor(equipment: any) {
        this.equipment_id = equipment.equipment_id;
        this.count = equipment.count;
        this.equipment_name = equipment.equipment_name;
        this.status = equipment.status;
        this.type = equipment.type;
        this.equipment_field_details = equipment.equipment_field_details.map((field: any) => ({
            id: field.id,
            equipment_id: field.equipment_id,
            field_code: field.field_code,
        }));
        this.equipment_staff_details = equipment.equipment_staff_details.map((staff: any) => ({
            id: staff.id,
            equipment_id: staff.equipment_id,
            staff_id: staff.staff_id,
        }));
    }
}

export class EquipmentFieldDetailsDTO {
    id!: number;
    equipment_id!: string;
    field_code!: string;

    constructor(field: any) {
        this.id = field.id;
        this.equipment_id = field.equipment_id;
        this.field_code = field.field_code;
    }
}

export class EquipmentStaffDetailsDTO {
    id!: number;
    equipment_id!: string;
    staff_id!: string;

    constructor(staff: any) {
        this.id = staff.id;
        this.equipment_id = staff.equipment_id;
        this.staff_id = staff.staff_id;
    }
}
