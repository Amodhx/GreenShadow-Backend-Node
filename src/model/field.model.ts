class FieldModel{
     field_code:string
     field_name:string
     field_location:string
     extent_size:string
     field_staff_details:string[]
     crop_field_details:string[]
     field_image:string | undefined
     log_fiedls_details:string[]
     equipment_field_details:string[]

    constructor(field_code: string, field_name: string, field_location: string, extent_size: string, staff_list: string[], crop_list: string[], field_image: string|undefined, logs_list: string[], equipments_list: string[]) {
        this.field_code = field_code;
        this.field_name = field_name;
        this.field_location = field_location;
        this.extent_size = extent_size;
        this.field_staff_details = staff_list;
        this.crop_field_details = crop_list;
        this.field_image = field_image;
        this.log_fiedls_details = logs_list;
        this.equipment_field_details = equipments_list;
    }
}
export default FieldModel;