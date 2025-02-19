import StaffModel, {Designation} from "../../model/staff.model";
import {BaseDao} from "../base.dao";
import prisma from "../../../prisma/client";
import {staff_designation, staff_gender, staff_role} from "@prisma/client";
import {StaffDto} from "../../dto/staff.dto";

class StaffDao implements BaseDao<StaffModel>{
    async create(dataObj: StaffModel) {
        try {
           const  savedStaff = await prisma.staff.create({
               data : {
                   staff_id : dataObj.staff_id,
                   first_name : dataObj.first_name,
                   last_name : dataObj.last_name,
                   dob : dataObj.dob,
                   joined_date : dataObj.joined_date,
                   designation : dataObj.designation as unknown as staff_designation,
                   gender : dataObj.gender as unknown as staff_gender,
                   address_line_01 : dataObj.address_line_01,
                   address_line_02 : dataObj.address_line_02,
                   address_line_03 : dataObj.address_line_03,
                   address_line_04 : dataObj.address_line_04,
                   address_line_05 : dataObj.address_line_05,
                   contact_number : dataObj.contact_number,
                   email : dataObj.email,
                   role : dataObj.role as unknown as staff_role,
                   equipment_staff_details : {
                       create : dataObj.equipment_staff_details.map((equipment) =>({
                           equipment : {connect : {equipment_id : equipment}}
                       }))
                   },
                   field_staff_details : {
                       create : dataObj.field_staff_details.map((field) =>({
                           field : {connect : {field_code : field}}
                       }))
                   }
               },
               include : {
                   equipment_staff_details : true,
                   field_staff_details : true
               }
           })
            console.log("Saved Staff : " +savedStaff);
            return savedStaff;
        }catch (err){
            throw err
        }
    }

    async delete(id: string) {
        try {
            return await prisma.staff.delete({
                where : {
                    staff_id : id
                }
            })
        }catch (err){
            throw  err;
        }
    }

    async findAll() {
        try {
            const staffs = await prisma.staff.findMany({
                include : {
                    equipment_staff_details : true,
                    field_staff_details : true
                }
            })
            return staffs.map((staff)=>new StaffDto(staff));
        }catch (err){
            throw err;
        }
    }

    async update(dataObj: StaffModel) {
        try {
            const  updatedStaff = await prisma.staff.update({
                where : {
                    staff_id : dataObj.staff_id
                },
                data : {
                    first_name : dataObj.first_name,
                    last_name : dataObj.last_name,
                    dob : dataObj.dob,
                    joined_date : dataObj.joined_date,
                    designation : dataObj.designation as unknown as staff_designation,
                    gender : dataObj.gender as unknown as staff_gender,
                    address_line_01 : dataObj.address_line_01,
                    address_line_02 : dataObj.address_line_02,
                    address_line_03 : dataObj.address_line_03,
                    address_line_04 : dataObj.address_line_04,
                    address_line_05 : dataObj.address_line_05,
                    contact_number : dataObj.contact_number,
                    email : dataObj.email,
                    role : dataObj.role as unknown as staff_role,
                    equipment_staff_details : {
                        deleteMany : {},
                        create : dataObj.equipment_staff_details.map((equipment) =>({
                            equipment : {connect : {equipment_id : equipment}}
                        }))
                    },
                    field_staff_details : {
                        deleteMany : {},
                        create : dataObj.field_staff_details.map((field) =>({
                            field : {connect : {field_code : field}}
                        }))
                    }
                },
                include : {
                    equipment_staff_details : true,
                    field_staff_details : true
                }
            })
            console.log("Updated Staff : " +updatedStaff);
            return updatedStaff;
        }catch (err){
            throw err
        }
    }
    async generateNextStaffId(){
        try {
            const staffs = await prisma.staff.findMany({
                select : {
                    staff_id : true
                }
            });
            const sortedStaffs = staffs
                .map((staff) =>{
                    const numberPart = parseInt(staff.staff_id.split('-')[1]);
                    return { staff_id: staff.staff_id, numberPart };
                })
                .sort((a,b) => b.numberPart - a.numberPart);
            if (sortedStaffs.length === 0){
                return "STAFF-1"
            }
            const lastIdNumber = sortedStaffs[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `STAFF-${nextIdNumber}`;

        }catch (err){
            throw err;
        }
    }

}

const Staff_dao = new StaffDao();
export default Staff_dao;