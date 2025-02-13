class FieldModel{
     field_id:string
     field_name:string
     field_location:string
     extent_size:string
     staff_list:string[]
     crop_list:string[]
     field_image:string | undefined
     logs_list:string[]
     equipments_list:string[]

    constructor(field_code: string, field_name: string, field_location: string, extent_size: string, staff_list: string[], crop_list: string[], field_image: string|undefined, logs_list: string[], equipments_list: string[]) {
        this.field_id = field_code;
        this.field_name = field_name;
        this.field_location = field_location;
        this.extent_size = extent_size;
        this.staff_list = staff_list;
        this.crop_list = crop_list;
        this.field_image = field_image;
        this.logs_list = logs_list;
        this.equipments_list = equipments_list;
    }
}
export default FieldModel;