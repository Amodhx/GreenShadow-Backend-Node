import {VehicleDto} from "./vehicle.dto";

export class StaffDto {
    staff_id!: string;
    address_line_01?: string;
    address_line_02?: string;
    address_line_03?: string;
    address_line_04?: string;
    address_line_05?: string;
    contact_number?: string;
    designation?: string;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    joined_date?: string;
    last_name?: string;
    role?: string;
    equipment_staff_details!: EquipmentStaffDetailsDTO[];
    field_staff_details!: FieldStaffDetailsDTO[];
    log_staff_details!: LogStaffDetailsDTO[];
    vehicle!: VehicleDto[];

    constructor(staff: any) {
        this.staff_id = staff.staff_id;
        this.address_line_01 = staff.address_line_01;
        this.address_line_02 = staff.address_line_02;
        this.address_line_03 = staff.address_line_03;
        this.address_line_04 = staff.address_line_04;
        this.address_line_05 = staff.address_line_05;
        this.contact_number = staff.contact_number;
        this.designation = staff.designation;
        this.dob = staff.dob;
        this.email = staff.email;
        this.first_name = staff.first_name;
        this.gender = staff.gender;
        this.joined_date = staff.joined_date;
        this.last_name = staff.last_name;
        this.role = staff.role;
        this.equipment_staff_details = staff.equipment_staff_details.map((equipment: any) => new EquipmentStaffDetailsDTO(equipment));
        this.field_staff_details = staff.field_staff_details.map((field: any) => new FieldStaffDetailsDTO(field));
        this.log_staff_details = staff.log_staff_details.map((log: any) => new LogStaffDetailsDTO(log));
        this.vehicle = staff.vehicle.map((vehicle: any) => new VehicleDto(vehicle));
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

export class LogStaffDetailsDTO {
    id!: number;
    log_code!: string;
    staff_id!: string;

    constructor(logStaff: any) {
        this.id = logStaff.id;
        this.log_code = logStaff.log_code;
        this.staff_id = logStaff.staff_id;
    }
}
