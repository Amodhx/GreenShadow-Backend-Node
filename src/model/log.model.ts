class LogModel{
     log_code:string
     log_date:string
     log_details:string
     log_type:string
     observe_image:string
     log_fiedls_details:string[]
     log_crop_details:string[]
     log_staff_details:string[]


     constructor(log_code: string, log_date: string, log_details: string, logType: string, observe_image: string, fields_list: string[], crops_list: string[], staffs_list: string[]) {
          this.log_code = log_code;
          this.log_date = log_date;
          this.log_details = log_details;
          this.log_type = logType;
          this.observe_image = observe_image;
          this.log_fiedls_details = fields_list;
          this.log_crop_details = crops_list;
          this.log_staff_details = staffs_list;
     }
}
export default LogModel
export enum LogType{
    DANGER,NORMAL
}