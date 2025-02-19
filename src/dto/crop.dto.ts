import { LogCropDetailsDTO } from "./log.dto";

export class CropDto {
    crop_code!: string;
    category!: string;
    crop_common_name!: string;
    crop_image!: string;
    crop_scientific_name!: string;
    season!: string;
    crop_field_details!: CropFieldDetailsDTO[];
    log_crop_details!: LogCropDetailsDTO[];

    constructor(crop: any) {
        this.crop_code = crop.crop_code;
        this.category = crop.category;
        this.crop_common_name = crop.crop_common_name;
        this.crop_image = crop.crop_image;
        this.crop_scientific_name = crop.crop_scientific_name;
        this.season = crop.season;
        this.crop_field_details = crop.crop_field_details.map((field: any) => ({
            id: field.id,
            crop_code: field.crop_code,
            field_code: field.field_code,
        }));
        this.log_crop_details = crop.log_crop_details.map((logCrop: any) => ({
            id: logCrop.id,
            log_code: logCrop.log_code,
            crop_code: logCrop.crop_code,
        }));
    }
}

export class CropFieldDetailsDTO {
    id!: number;
    crop_code!: string;
    field_code!: string;

    constructor(field: any) {
        this.id = field.id;
        this.crop_code = field.crop_code;
        this.field_code = field.field_code;
    }
}
