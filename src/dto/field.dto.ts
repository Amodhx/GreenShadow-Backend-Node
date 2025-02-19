export class FieldDto {
    field_code!: string;
    extent_size?: string;
    field_image?: string;
    field_location?: string;
    field_name?: string;
    crop_field_details!: CropFieldsDetailsDTO[];
    equipment_field_details!: EquipmentFieldDetailsDTO[];
    field_staff_details!: FieldStaffDetailsDTO[];
    log_fiedls_details!: LogFieldsDetailsDTO[];

    constructor(field: any) {
        this.field_code = field.field_code;
        this.extent_size = field.extent_size;
        this.field_image = field.field_image;
        this.field_location = field.field_location;
        this.field_name = field.field_name;
        this.crop_field_details = field.crop_field_details.map((crop: any) => ({
            id: crop.id,
            crop_code: crop.crop_code,
            field_code: crop.field_code,
        }));
        this.equipment_field_details = field.equipment_field_details.map((equipment: any) => ({
            id: equipment.id,
            equipment_id: equipment.equipment_id,
            field_code: equipment.field_code,
        }));
        this.field_staff_details = field.field_staff_details.map((staff: any) => ({
            id: staff.id,
            field_code: staff.field_code,
            staff_id: staff.staff_id,
        }));
        this.log_fiedls_details = field.log_fiedls_details.map((log: any) => ({
            id: log.id,
            log_code: log.log_code,
            field_code: log.field_code,
        }));
    }
}

export class EquipmentFieldDetailsDTO {
    id!: number;
    equipment_id!: string;
    field_code!: string;

    constructor(equipmentField: any) {
        this.id = equipmentField.id;
        this.equipment_id = equipmentField.equipment_id;
        this.field_code = equipmentField.field_code;
    }
}

export class CropFieldsDetailsDTO {
    id!: number;
    crop_code!: string;
    field_code!: string;

    constructor(cropField: any) {
        this.id = cropField.id;
        this.crop_code = cropField.crop_code;
        this.field_code = cropField.field_code;
    }
}

export class FieldStaffDetailsDTO {
    id!: number;
    field_code!: string;
    staff_id!: string;

    constructor(staff: any) {
        this.id = staff.id;
        this.field_code = staff.field_code;
        this.staff_id = staff.staff_id;
    }
}

export class LogFieldsDetailsDTO {
    id!: number;
    log_code!: string;
    field_code!: string;

    constructor(logField: any) {
        this.id = logField.id;
        this.log_code = logField.log_code;
        this.field_code = logField.field_code;
    }
}
