import {Inject, Injectable} from "@nestjs/common";
import {AreaModel} from "../Models/Area.model";
import {CreateAreaRequestDto} from "../Dto/create-area-request.dto";
import {AreaDao} from "../Dao/Area.dao";
import {UpdateAreaRequestDto} from "../Dto/update-area-request.dto";
import {DeleteAreaRequestDto} from "../Dto/Delete-area-request-dto";

@Injectable()
export class AreaService {

    constructor(private areaDao: AreaDao) {
    }

    async getAllAreas(): Promise<AreaModel[]> {
        return new Promise<any>(async (resolve, reject) => {
            const areas = await this.areaDao.getAllAreas();
            if(!areas){
                return reject(areas)
            }
            return resolve(areas.map(area => AreaModel.transformFromEntityToModel(area)))
        })
    }


    async createArea(createAreaDto: CreateAreaRequestDto): Promise<AreaModel> {
        const areaModel: AreaModel = {
            title: createAreaDto.title,
            description: createAreaDto.description,
            geoJson: createAreaDto.geoJson,
            cameras: createAreaDto.cameras,
            radars: createAreaDto.radars
        };
        const areaEntity = await this.areaDao.createArea(areaModel);
        return AreaModel.transformFromEntityToModel(areaEntity);
    }

    async updateArea(updateAreaDto: UpdateAreaRequestDto): Promise<AreaModel> {
        const areaModel: AreaModel = {
            id: updateAreaDto.id,
            title: updateAreaDto.title,
            description: updateAreaDto.description,
            geoJson: updateAreaDto.geoJson,
            cameras: updateAreaDto.cameras,
            radars: updateAreaDto.radars
        }
        return await this.areaDao.updateArea(areaModel);
    }



    async deleteArea(deleteAreaDto: DeleteAreaRequestDto): Promise<Number> {
        // which object to send to dao weather areaModel or DeleteAreaRequestDto ?
        const areaModel: AreaModel = {
            id: deleteAreaDto.id,
        }
        const areaEntity = await this.areaDao.deleteArea(areaModel);
        return areaEntity;
    }
}