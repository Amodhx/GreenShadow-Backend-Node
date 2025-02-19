import StaffModel from "../model/staff.model";
import staffDao from "../dao/impl/staff.dao";
import {StaffDto} from "../dto/staff.dto";
import {staff_designation, staff_gender, staff_role} from "@prisma/client";

class StaffService{
    async saveStaff(staffObj:StaffModel){
        try {
            staffObj.staff_id = await staffDao.generateNextStaffId();
            return await staffDao.create(staffObj);
        }catch (err){
            throw err;
        }
    }
    async updateStaff(staffObj:StaffModel){
        try {
            return await staffDao.update(staffObj)
        }catch (err){
            throw err;
        }
    }
    async deleteStaff(staff_id:string){
        try {
            return await staffDao.delete(staff_id);
        }catch (err){
            throw err;
        }
    }
    async getAllStaffs(){
        try {
            const staffs:StaffDto[] = await staffDao.findAll();
            let staffsToReturn :StaffModel[] = [];
            staffs.map((staff:StaffDto) =>{
                let fieldIds = staff.field_staff_details.map((fieldStaff)=>fieldStaff.field_code);
                let logIds = staff.log_staff_details.map((logStaff)=> logStaff.log_code);
                let equipmentIds = staff.equipment_staff_details.map((equipmentStaff)=> equipmentStaff.equipment_id);
                let vehicleIds = staff.vehicle.map((vehicle) => vehicle.vehicle_code);

                staffsToReturn.push(
                    new StaffModel(
                        staff.staff_id,
                        staff.first_name || '',
                        staff.last_name || '',
                        staff.designation as staff_designation,
                        staff.gender as staff_gender,
                        staff.joined_date || '',
                        staff.dob || '',
                        staff.address_line_01 || '',
                        staff.address_line_02 || '',
                        staff.address_line_03 || '',
                        staff.address_line_04 || '',
                        staff.address_line_05 || '',
                        staff.contact_number || '',
                        staff.email || '',
                        staff.role as staff_role,
                        fieldIds,
                        logIds,
                        equipmentIds,
                        vehicleIds
                    )
                )
            })
            return staffsToReturn;
        }catch (err){
            throw err;
        }
    }

}
const Staff_service = new StaffService();
export default Staff_service;