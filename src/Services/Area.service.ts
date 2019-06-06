import {Inject, Injectable} from "@nestjs/common";
import {AreaModel} from "../Models/Area.model";
import {CreateAreaRequestDto} from "../Dto/create-area-request.dto";
import {AreaDao} from "../Dao/Area.dao";

@Injectable()
export class AreaService {

    constructor(private areaDao: AreaDao) {}

    async getAllAreas(): Promise<AreaModel[]> {
        return await [new AreaModel()];
    }

    async createArea(createAreaDto: CreateAreaRequestDto): Promise<AreaModel> {
        const areaModel :AreaModel = {
            title: createAreaDto.title,
            description: createAreaDto.description,
            geoJson: createAreaDto.geoJson,
            cameras:createAreaDto.cameras,
            radars:createAreaDto.radars
        };
        const areaEntity = await this.areaDao.createArea(areaModel);
        return AreaModel.transformFromEntityToModel(areaEntity);
    }
}