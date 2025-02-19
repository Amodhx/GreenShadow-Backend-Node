import {BaseDao} from "../base.dao";
import VehicleModel from "../../model/vehicle.model";
import prisma from "../../../prisma/client";
import {vehicle_fuel_type, vehicle_status} from "@prisma/client";

class VehicleDao implements BaseDao<VehicleModel> {
    async create(dataObj: VehicleModel) {
        try {
            const staff = await prisma.staff.findUnique({
                where: {
                    staff_id: dataObj.staff_id
                }
            })
            let savedVehicle;
            if (!staff) {
                savedVehicle = await prisma.vehicle.create({
                    data: {
                        vehicle_code: dataObj.vehicle_code,
                        vehicle_category: dataObj.vehicle_category as unknown as vehicle_status,
                        status: dataObj.status as unknown as vehicle_status,
                        fuel_type: dataObj.fuelType as unknown as vehicle_fuel_type,
                        licence_plate_number: dataObj.licence_plate_number,
                        remarks: dataObj.remarks,
                    }
                })
            } else {
                savedVehicle = await prisma.vehicle.create({
                    data: {
                        vehicle_code: dataObj.vehicle_code,
                        vehicle_category: dataObj.vehicle_category as unknown as vehicle_status,
                        status: dataObj.status as unknown as vehicle_status,
                        fuel_type: dataObj.fuelType as unknown as vehicle_fuel_type,
                        licence_plate_number: dataObj.licence_plate_number,
                        remarks: dataObj.remarks,
                        staff_id: dataObj.staff_id
                    }
                })
            }
            console.log("Saved Vehicle: " + savedVehicle)
            return savedVehicle;
        } catch (err) {
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
        } catch (err) {
            throw err;
        }
    }

    async findAll() {
        try {
            return await prisma.vehicle.findMany();
        } catch (err) {
            throw err;
        }
    }

    async update(dataObj: VehicleModel) {
        try {
            const staff = await prisma.staff.findUnique({
                where: {
                    staff_id: dataObj.staff_id
                }
            })
            let updatedVehicle;
            if (!staff) {
                updatedVehicle = await prisma.vehicle.update({
                    where: {
                        vehicle_code: dataObj.vehicle_code
                    },
                    data: {
                        vehicle_category: dataObj.vehicle_category as unknown as vehicle_status,
                        status: dataObj.status as unknown as vehicle_status,
                        fuel_type: dataObj.fuelType as unknown as vehicle_fuel_type,
                        licence_plate_number: dataObj.licence_plate_number,
                        remarks: dataObj.remarks,
                    }
                })
            } else {
                updatedVehicle = await prisma.vehicle.update({
                    where: {
                        vehicle_code: dataObj.vehicle_code
                    },
                    data: {
                        vehicle_category: dataObj.vehicle_category as unknown as vehicle_status,
                        status: dataObj.status as unknown as vehicle_status,
                        fuel_type: dataObj.fuelType as unknown as vehicle_fuel_type,
                        licence_plate_number: dataObj.licence_plate_number,
                        remarks: dataObj.remarks,
                        staff_id: dataObj.staff_id
                    }
                })
            }
            console.log("updatedVehicle Vehicle: " + updatedVehicle)
            return updatedVehicle;
        } catch (err) {
            throw err;
        }
    }
    async generateNextVehicleId(){
        try {
            const vehicles = await prisma.vehicle.findMany({
                select : {
                    vehicle_code : true
                }
            });
            const sortedVehicles = vehicles
                .map((vehicle) =>{
                    const numberPart = parseInt(vehicle.vehicle_code.split('-')[1]);
                    return { vehicle_code: vehicle.vehicle_code, numberPart };
                })
                .sort((a,b) => b.numberPart - a.numberPart);
            if (sortedVehicles.length === 0){
                return "VEHICLE-1"
            }
            const lastIdNumber = sortedVehicles[0].numberPart;
            const nextIdNumber = lastIdNumber + 1;
            return `VEHICLE-${nextIdNumber}`;

        }catch (err){
            throw err;
        }
    }

}

const Vehicle_dao = new VehicleDao();
export default Vehicle_dao;