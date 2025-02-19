class VehicleModel{
    vehicle_code:string
     licence_plate_number:string
     vehicle_category:VehicleCategory
     fuelType:FuelType
     status:string
     staff_id:string
     remarks:string

    constructor(vehicle_id: string, licence_plate_number: string, vehicle_category: VehicleCategory, fuelType: FuelType, status: string, staff_id: string, remarks: string) {
        this.vehicle_code = vehicle_id;
        this.licence_plate_number = licence_plate_number;
        this.vehicle_category = vehicle_category;
        this.fuelType = fuelType;
        this.status = status;
        this.staff_id = staff_id;
        this.remarks = remarks;
    }
}
export default VehicleModel
enum VehicleCategory {
    AVAILABLE,OUT_OF_SERVICE
}
enum FuelType {
    PETROL,DIESEL
}