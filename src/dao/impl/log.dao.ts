import {BaseDao} from "../base.dao";
import LogModel from "../../model/log.model";
import prisma from "../../../prisma/client";
import {logs_log_type} from "@prisma/client";

class LogDao implements BaseDao<LogModel>{
    async create(dataObj: LogModel) {
        try {
            const savedLog = await prisma.logs.create({
                data:{
                    log_code : dataObj.log_code,
                    log_type : dataObj.logType as unknown as logs_log_type,
                    log_date : dataObj.log_date,
                    log_details : dataObj.log_details,
                    observe_image : dataObj.observe_image,
                    log_crop_details : {
                        create : dataObj.crops_list.map((crop)=>({
                            crop : {connect : {crop_code : crop}}
                        }))
                    },
                    log_staff_details : {
                        create : dataObj.staffs_list.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    log_fiedls_details : {
                        create : dataObj.fields_list.map((field) => ({
                            field : {connect : {field_code : field}}
                        }))
                    }
                },
                include : {
                    log_fiedls_details : true,
                    log_staff_details : true,
                    log_crop_details : true
                }
            })
            console.log("Saved Log :  "+ savedLog)
            return savedLog;
        }catch (err){
            throw err;
        }
    }

    async delete(id: string) {
        try {
            return await prisma.logs.delete({
                where: {
                    log_code: id
                }
            });
        }catch (err){
            throw err;
        }
    }

    async findAll() {
        try {
            return await prisma.logs.findMany({
                include : {
                    log_fiedls_details : true,
                    log_staff_details : true,
                    log_crop_details : true
                }
            })
        }catch (err){
            throw err;
        }
    }

    async update(dataObj: LogModel) {
        try {
            const updatedLog = await prisma.logs.update({
                where : {
                    log_code : dataObj.log_code
                },
                data:{
                    log_type : dataObj.logType as unknown as logs_log_type,
                    log_date : dataObj.log_date,
                    log_details : dataObj.log_details,
                    observe_image : dataObj.observe_image,
                    log_crop_details : {
                        deleteMany : {},
                        create : dataObj.crops_list.map((crop)=>({
                            crop : {connect : {crop_code : crop}}
                        }))
                    },
                    log_staff_details : {
                        deleteMany : {},
                        create : dataObj.staffs_list.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    log_fiedls_details : {
                        deleteMany : {},
                        create : dataObj.fields_list.map((field) => ({
                            field : {connect : {field_code : field}}
                        }))
                    }
                },
                include : {
                    log_fiedls_details : true,
                    log_staff_details : true,
                    log_crop_details : true
                }
            })
            console.log("Updated Log :  "+ updatedLog)
            return updatedLog;
        }catch (err){
            throw err;
        }
    }

}
const Log_dao = new LogDao();
export default Log_dao;