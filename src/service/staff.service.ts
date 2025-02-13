import StaffModel from "../model/staff.model";
import staffDao from "../dao/impl/staff.dao";

class StaffService{
    async saveStaff(staffObj:StaffModel){
        try {
            staffObj.staff_id = "STAFF-1"
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
            return await staffDao.findAll();
        }catch (err){
            throw err;
        }
    }

}
const Staff_service = new StaffService();
export default Staff_service;