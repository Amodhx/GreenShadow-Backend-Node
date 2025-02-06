class CropModel{
    crop_id:string
    crop_common_name:string
    crop_scientific_name:string
    crop_image:string|undefined
    category:string
    season:string
    field_code_list:string[]
    logs_list:string[]

    constructor(crop_code: string, crop_common_name: string, crop_scientific_name: string, crop_image: string|undefined, category: string, season: string, field_code_list: string[], logs_list: string[]) {
        this.crop_id = crop_code;
        this.crop_common_name = crop_common_name;
        this.crop_scientific_name = crop_scientific_name;
        this.crop_image = crop_image;
        this.category = category;
        this.season = season;
        this.field_code_list = field_code_list;
        this.logs_list = logs_list;
    }
}
export default CropModel