import {Inject, Injectable} from "@nestjs/common";
import {TargetDao} from "../Dao/Target.dao";
import {AreaModel} from "../Models/Area.model";
import {TargetModel} from "../Models/Target.model";

@Injectable()
export class TargetService {
    constructor(private targetDao: TargetDao) {

    }

    async getAllTargets(): Promise<TargetModel[]> {
        let targetsEntity = await this.targetDao.getAllTargets()
        // targetsEntity = targetsEntity.forEach((targetEntity => {
        //     TargetModel.transformFromEntityToModel(targetEntity);
        // }))
        return targetsEntity;
    }
}






