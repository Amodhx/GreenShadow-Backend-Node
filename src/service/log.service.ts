import LogModel from "../model/log.model";
import logDao from "../dao/impl/log.dao";

class LogService{

    async saveLog(logObj:LogModel){
        try {
            logObj.log_code = "LOG-8"
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
            return await logDao.findAll();
        }catch (err){
            throw err;
        }
    }
}
const Log_service = new LogService();
export default Log_service;