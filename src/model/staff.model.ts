class StaffModel{
    staff_id:string
    first_name:string
    last_name:string
    designation:Designation
    gender:Gender
    joined_date:string
    dob:string
    address_line_01:string
    address_line_02:string
    address_line_03:string
    address_line_04:string
    address_line_05:string
    contact_number:string
    email:string
    role:Role
    field_staff_details:string[]
    logs_list:string[]
    equipment_staff_details:string[]
    vehicle:string[]


    constructor(staff_id: string, first_name: string, last_name: string, designation: Designation, gender: Gender, joined_date: string, dob: string, address_line_01: string, address_line_02: string, address_line_03: string, address_line_04: string, address_line_05: string, contact_number: string, email: string, role: Role, fields_list: string[], logs_list: string[], equipments_list: string[], vehicles_list: string[]) {
        this.staff_id = staff_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.designation = designation;
        this.gender = gender;
        this.joined_date = joined_date;
        this.dob = dob;
        this.address_line_01 = address_line_01;
        this.address_line_02 = address_line_02;
        this.address_line_03 = address_line_03;
        this.address_line_04 = address_line_04;
        this.address_line_05 = address_line_05;
        this.contact_number = contact_number;
        this.email = email;
        this.role = role;
        this.field_staff_details = fields_list;
        this.logs_list = logs_list;
        this.equipment_staff_details = equipments_list;
        this.vehicle = vehicles_list;
    }
}
export enum Designation {
    MANAGER,SENIOR_ASSISTANT_MANAGER,ASSISTANT_MANAGER,ADMIN_HR_STAFF,OFFICE_ASSISTANT,SENIOR_AGRONOMIST,AGRONOMIST,SOIL_SCIENTIST,SENIOR_TECHNICIAN,TECHNICIAN,SUPERVISOR,LABOR
}
export enum Gender {
    MALE,FEMALE,OTHER
}
export enum Role{
    MANAGER,ADMINISTRATIVE,SCIENTIST,OTHER
}
export default StaffModel