import {BaseDao} from "../base.dao";
import LogModel, {LogType} from "../../model/log.model";
import prisma from "../../../prisma/client";
import {logs_log_type} from "@prisma/client";
import {LogDTO} from "../../dto/log.dto";

class LogDao implements BaseDao<LogModel>{
    async create(dataObj: LogModel) {
        try {
            const savedLog = await prisma.logs.create({
                data:{
                    log_code : dataObj.log_code,
                    log_type : dataObj.log_type as unknown as logs_log_type,
                    log_date : dataObj.log_date,
                    log_details : dataObj.log_details,
                    observe_image : dataObj.observe_image,
                    log_crop_details : {
                        create : dataObj.log_crop_details.map((crop)=>({
                            crop : {connect : {crop_code : crop}}
                        }))
                    },
                    log_staff_details : {
                        create : dataObj.log_staff_details.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    log_fiedls_details : {
                        create : dataObj.log_fiedls_details.map((field) => ({
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
            const logs = await prisma.logs.findMany({
                include: {
                    log_crop_details: true,
                    log_fiedls_details: true,
                    log_staff_details: true,
                },
            });

            return logs.map((log) => new LogDTO(log));

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
                    log_type : dataObj.log_type as logs_log_type,
                    log_date : dataObj.log_date,
                    log_details : dataObj.log_details,
                    observe_image : dataObj.observe_image,
                    log_crop_details : {
                        deleteMany : {},
                        create : dataObj.log_crop_details.map((crop)=>({
                            crop : {connect : {crop_code : crop}}
                        }))
                    },
                    log_staff_details : {
                        deleteMany : {},
                        create : dataObj.log_staff_details.map((staff)=>({
                            staff : {connect : {staff_id : staff}}
                        }))
                    },
                    log_fiedls_details : {
                        deleteMany : {},
                        create : dataObj.log_fiedls_details.map((field) => ({
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
            return updatedLog;
        }catch (err){
            throw err;
        }
    }
    async generateNextLogId(){
        try {
            const logs = await prisma.logs.findMany({
                select : {
                    log_code : true
                }
            })
            const sortedLogs = logs
                .map((log)=>{
                    const numberPart = parseInt(log.log_code.split('-')[1]);
                    return {log_code : log.log_code,numberPart};
                })
                .sort((a,b)=> b.numberPart- a.numberPart);
            if (sortedLogs.length === 0 ){
                return "LOG-1";
            }
            const lastIdNumber = sortedLogs[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `LOG-${nextIdNumber}`;
        }catch (err){
            throw err;
        }
    }

}
const Log_dao = new LogDao();
export default Log_dao;