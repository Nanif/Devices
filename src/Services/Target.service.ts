import {Injectable} from "@nestjs/common";
import {TargetDao} from "../Dao/Target.dao";
import {AreaModel} from "../Models/Area.model";
import {TargetModel} from "../Models/Target.model";
import {CreateTargetRequestDto} from "../Dto/Create-target-request";

@Injectable()
export class TargetService {
    constructor(private targetDao: TargetDao) {

    }


    async createTarget(createTargetDto: CreateTargetRequestDto): Promise<AreaModel> {
        const targetModel: TargetModel = {
            title: createTargetDto.title,
            description: createTargetDto.description,
            status: createTargetDto.status,
            radarId: createTargetDto.radarId
        };
        const targetEntity = await this.targetDao.createArea(targetModel);
        return TargetModel.transformFromEntityToModel(targetEntity );
    }

    async getAllTargets(): Promise<TargetModel[]> {
        let targetsEntity = await this.targetDao.getAllTargets()
        // targetsEntity = targetsEntity.forEach((targetEntity => {
        //     TargetModel.transformFromEntityToModel(targetEntity);
        // }))
        return targetsEntity;
    }
}






