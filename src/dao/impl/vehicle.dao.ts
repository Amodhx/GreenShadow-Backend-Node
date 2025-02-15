import {BaseDao} from "../base.dao";
import VehicleModel from "../../model/vehicle.model";
import prisma from "../../../prisma/client";
import {vehicle_fuel_type, vehicle_status} from "@prisma/client";

class VehicleDao implements BaseDao<VehicleModel>{
    async create(dataObj: VehicleModel) {
        const staff = await prisma.staff.findUnique({
            where : {
                staff_id : dataObj.staff_id
            }
        })
        let savedVehicle ;
        if (!staff){
            savedVehicle = await prisma.vehicle.create({
                data : {
                    vehicle_code : dataObj.vehicle_id,
                    vehicle_category : dataObj.vehicle_category as unknown as vehicle_status,
                    status : dataObj.status as unknown as vehicle_status,
                    fuel_type : dataObj.fuelType as unknown as vehicle_fuel_type,
                    licence_plate_number : dataObj.licence_plate_number,
                    remarks : dataObj.remarks,
                }
            })
        }else {
           savedVehicle = await prisma.vehicle.create({
                data : {
                    vehicle_code : dataObj.vehicle_id,
                    vehicle_category : dataObj.vehicle_category as unknown as vehicle_status,
                    status : dataObj.status as unknown as vehicle_status,
                    fuel_type : dataObj.fuelType as unknown as vehicle_fuel_type,
                    licence_plate_number : dataObj.licence_plate_number,
                    remarks : dataObj.remarks,
                    staff_id : dataObj.staff_id
                }
            })
        }
        try {

            console.log("Saved Vehicle: "+savedVehicle)
            return savedVehicle;
        }catch (err){
            throw err;
        }
    }

    async delete(id: string) {
        try {

            return await prisma.vehicle.delete({
                where: {
                    vehicle_code: id
                }
            });
        }catch (err){
            throw err;
        }
    }

    async findAll() {
        try {
            return await prisma.vehicle.findMany();
        }catch (err){
            throw err;
        }
    }

    async update(dataObj: VehicleModel) {
        try {
            const updatedVehicle = await prisma.vehicle.update({
                where : {
                    vehicle_code : dataObj.vehicle_id
                },
                data : {
                    vehicle_category : dataObj.vehicle_category as unknown as vehicle_status,
                    status : dataObj.status as unknown as vehicle_status,
                    fuel_type : dataObj.fuelType as unknown as vehicle_fuel_type,
                    licence_plate_number : dataObj.licence_plate_number,
                    remarks : dataObj.remarks,
                    staff_id : dataObj.staff_id || null
                }
            })
            console.log("updatedVehicle : "+ updatedVehicle)
            return updatedVehicle;
        }catch (err){
            throw err;
        }
    }

}
const Vehicle_dao = new VehicleDao();
export default Vehicle_dao;