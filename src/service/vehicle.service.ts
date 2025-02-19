import VehicleModel from "../model/vehicle.model";
import Vehicle_dao from "../dao/impl/vehicle.dao";

class VehicleService{
    async saveVehicle(vehicleObj:VehicleModel){
        try {
            vehicleObj.vehicle_code = "VEHICLE-1"
            return await Vehicle_dao.create(vehicleObj);
        }catch (err){
            throw err
        }
    }
    async updateVehicle(vehicleObj:VehicleModel){
        try {
            return await Vehicle_dao.update(vehicleObj);
        }catch (err){
            throw err
        }
    }
    async deleteVehicle(vehicle_id:string){
        try {
            return await Vehicle_dao.delete(vehicle_id);
        }catch (err){
            throw err
        }
    }
    async getAllVehicles(){
        try {
            return await Vehicle_dao.findAll();
        }catch (err){
            throw err
        }
    }
}
const Vehicle_service =new VehicleService();
export default Vehicle_service