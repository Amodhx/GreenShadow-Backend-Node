import {Request, Response} from "express";
import fieldService from "../service/field.service";
import {unwatchFile} from "node:fs";
import LogModel from "../model/log.model";
import logService from "../service/log.service";
import equipmentService from "../service/equipment.service";
import {logs_log_type} from "@prisma/client";

class LogController{
    async saveLog(req:Request,resp:Response):Promise<void>{
        try {
            if (!req.file){
                resp.status(400).json({message : "NO FILE UPLOADED"})
                return
            }
            const file = req.file;
            const base64 = file.buffer.toString("base64")
            const data = req.body;
            if (!data.fields_list){
                data.fields_list = []
            }else {
                data.fields_list = data.fields_list.split(',')
            }
            if (!data.staffs_list){
                data.staffs_list = []
            }else {
                data.staffs_list = data.staffs_list.split(',')
            }
            if (!data.crops_list){
                data.crops_list = [];
            }else {
                data.crops_list = data.crops_list.split(',')
            }
            const model = new LogModel(
                data.log_id,
                data.log_date,
                data.log_details,
                data.log_type as logs_log_type,
                base64,
                data.fields_list,
                data.crops_list,
                data.staffs_list
            );
            resp.status(201).send(await logService.saveLog(model))
        }catch (err){
            console.log("ERRR")
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async updateLog(req:Request,resp:Response):Promise<void>{
        try {
            if (!req.file){
                resp.status(400).json({message : "NO FILE UPLOADED"})
                return
            }
            const file = req.file;
            const base64 = file.buffer.toString("base64")
            const data = req.body;
            if (!data.fields_list){
                data.fields_list = []
            }else {
                data.fields_list = data.fields_list.split(',')
            }
            if (!data.staffs_list){
                data.staffs_list = []
            }else {
                data.staffs_list = data.staffs_list.split(',')
            }
            if (!data.crops_list){
                data.crops_list = [];
            }else {
                data.crops_list = data.crops_list.split(',')
            }
            const model = new LogModel(
                data.log_code,
                data.log_date,
                data.log_details,
                data.log_type as logs_log_type,
                base64,
                data.fields_list,
                data.crops_list,
                data.staffs_list
            );
            resp.status(201).send(await logService.updateLog(model))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async deleteLog(req:Request,resp:Response){
        try {
            const  id = req.query['id'];
            if (typeof id === "string") {
                resp.status(201).send(await logService.deleteLog(id))
            }
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async getAllLogs(req:Request,resp:Response){
        try {
            resp.status(201).send(await logService.getAllLogs())
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
const Log_controller = new LogController();
export default Log_controller