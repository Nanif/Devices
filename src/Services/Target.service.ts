import {Injectable} from "@nestjs/common";
import {CreateTargetRequestDto} from "../Dto/Create-target-request";
import {TargetModel} from "../Models/Target.model";
import {TargetDao} from "../Dao/Target.dao";

@Injectable()
export class  TargetService {
    constructor(private readonly targetDao: TargetDao) {

    }

    async createTarget(createTargetDto: CreateTargetRequestDto): Promise<TargetModel> {
        const targetModel: TargetModel = {
            title: createTargetDto.title,
            description: createTargetDto.description,
            status: createTargetDto.status,
            radarId: createTargetDto.radarId
        };
        const targetEntity = await this.targetDao.createTarget(targetModel);
        return TargetModel.transformFromEntityToModel(targetEntity);
    }
}