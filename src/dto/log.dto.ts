export class LogCropDetailsDTO {
    id!: number;
    log_code!: string;
    crop_code!: string;
}

export class LogFieldsDetailsDTO {
    id!: number;
    log_code!: string;
    field_code!: string;
}

export class LogStaffDetailsDTO {
    id!: number;
    log_code!: string;
    staff_id!: string;
}

export class LogDTO {
    log_code!: string;
    log_type?: string; // Adjust if `logs_log_type` is an enum or object
    log_date?: string;
    log_details?: string;
    observe_image?: string;
    log_crop_details!: LogCropDetailsDTO[];
    log_fields_details!: LogFieldsDetailsDTO[];
    log_staff_details!: LogStaffDetailsDTO[];

    constructor(log: any) {
        this.log_code = log.log_code;
        this.log_type = log.log_type;
        this.log_date = log.log_date;
        this.log_details = log.log_details;
        this.observe_image = log.observe_image;
        this.log_crop_details = log.log_crop_details.map((crop: any) => ({
            id: crop.id,
            log_code: crop.log_code,
            crop_code: crop.crop_code,
        }));
        this.log_fields_details = log.log_fiedls_details.map((field: any) => ({
            id: field.id,
            log_code: field.log_code,
            field_code: field.field_code,
        }));
        this.log_staff_details = log.log_staff_details.map((staff: any) => ({
            id: staff.id,
            log_code: staff.log_code,
            staff_id: staff.staff_id,
        }));
    }
}
