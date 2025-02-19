import LogModel from "../model/log.model";
import logDao from "../dao/impl/log.dao";
import {LogCropDetailsDTO, LogDTO, LogFieldsDetailsDTO, LogStaffDetailsDTO} from "../dto/log.dto";
import {logs_log_type} from "@prisma/client";

class LogService{

    async saveLog(logObj:LogModel){
        try {
            logObj.log_code = await logDao.generateNextLogId();
            return await logDao.create(logObj);
        }catch (err){
            throw err;
        }
    }
    async updateLog(logObj:LogModel){
        try {
            return await logDao.update(logObj);
        }catch (err){
            throw err;
        }
    }
    async deleteLog(log_id:string){
        try {
            return await logDao.delete(log_id);
        }catch (err){
            throw err;
        }
    }
    async getAllLogs(){
        try {
            const logs:LogDTO[] = await logDao.findAll();
            let logsToReturn:LogModel[] = []
             logs.map((log:LogDTO) =>{
                let staffIds = log.log_staff_details.map((logStaffDetail:LogStaffDetailsDTO)=> logStaffDetail.staff_id)
                let fieldIds = log.log_fields_details.map((logFieldDetail:LogFieldsDetailsDTO)=> logFieldDetail.field_code)
                let cropIds = log.log_crop_details.map((logCropDetail:LogCropDetailsDTO)=> logCropDetail.crop_code)

                logsToReturn.push(
                    new LogModel(
                        log.log_code,
                        log.log_date || "",
                        log.log_details || "",
                        log.log_type as logs_log_type,
                        log.observe_image || "",
                        fieldIds,
                        cropIds,
                        staffIds
                    )
                )
            })
            return logsToReturn;
        }catch (err){
            throw err;
        }
    }
}
const Log_service = new LogService();
export default Log_service;