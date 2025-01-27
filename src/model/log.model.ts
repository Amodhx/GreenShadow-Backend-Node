class LogModel{
     log_id:string
     log_date:string
     log_details:string
     logType:LogType
     observe_image:string
     fields_list:string[]
     crops_list:string[]
     staffs_list:string[]


     constructor(log_code: string, log_date: string, log_details: string, logType: LogType, observe_image: string, fields_list: string[], crops_list: string[], staffs_list: string[]) {
          this.log_id = log_code;
          this.log_date = log_date;
          this.log_details = log_details;
          this.logType = logType;
          this.observe_image = observe_image;
          this.fields_list = fields_list;
          this.crops_list = crops_list;
          this.staffs_list = staffs_list;
     }
}
export default LogModel
enum LogType{
    DANGER,NORMAL
}