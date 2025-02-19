class CropModel{
    crop_code:string
    crop_common_name:string
    crop_scientific_name:string
    crop_image:string|undefined
    category:string
    season:string
    crop_field_details:string[]
    log_crop_details:string[]

    constructor(crop_code: string, crop_common_name: string, crop_scientific_name: string, crop_image: string|undefined, category: string, season: string, field_code_list: string[], logs_list: string[]) {
        this.crop_code = crop_code;
        this.crop_common_name = crop_common_name;
        this.crop_scientific_name = crop_scientific_name;
        this.crop_image = crop_image;
        this.category = category;
        this.season = season;
        this.crop_field_details = field_code_list;
        this.log_crop_details = logs_list;
    }
}
export default CropModel