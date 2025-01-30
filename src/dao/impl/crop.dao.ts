import {BaseDao} from "../base.dao";
import CropModel from "../../model/crop.model";
import prisma from "../../../prisma/client";


class CropDao implements BaseDao<CropModel>{
    create(dataObj: CropModel) {

    }

    delete(id: number) {
    }

    findAll() {
    }

    update(dataObj: CropModel) {
    }


}