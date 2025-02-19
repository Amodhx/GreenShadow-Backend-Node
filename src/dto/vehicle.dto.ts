

export class VehicleDto {
    vehicle_code!: string;
    fuel_type?: string;
    licence_plate_number?: string;
    remarks?: string;
    status?: string;
    vehicle_category?: string;
    staff_id?: string;

    constructor(vehicle: any) {
        this.vehicle_code = vehicle.vehicle_code;
        this.fuel_type = vehicle.fuel_type;
        this.licence_plate_number = vehicle.licence_plate_number;
        this.remarks = vehicle.remarks;
        this.status = vehicle.status;
        this.vehicle_category = vehicle.vehicle_category;
        this.staff_id = vehicle.staff_id;
    }
}