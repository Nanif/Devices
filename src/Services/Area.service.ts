import {Inject, Injectable} from "@nestjs/common";
import {Area} from "../DB/Entities/Area.entity";
import {AreaModel} from "../Models/Area.model";
import {Camera} from "../DB/Entities/Camera.entity";

@Injectable()
export class AreaService {

    constructor(@Inject('Areas_REPOSITORY') private readonly Areas_REPOSITORY: typeof Area,
                @Inject('Cameras_REPOSITORY') private readonly Cameras_REPOSITORY: typeof Camera) {}

    async getAllAreas(): Promise<AreaModel[]> {
       const areas = await  this.Areas_REPOSITORY.findAll();
        console.log(areas);
        return areas;
    }

    async createArea(areaModel: AreaModel): Promise<Area> {
        const area = await this.Areas_REPOSITORY.create({
            title: areaModel.title,
            description: areaModel.description,
            cameras: areaModel.cameras,
            radars: areaModel.radars,
            geoJson: areaModel.geoJson
        });

        if (areaModel.cameras.length > 0) {
            const camera =
        }


        if (areaModel.cameras.length > 0) {

        }

        const camera = await this.Cameras_REPOSITORY.create({
            ip:'123'
        });

        // @ts-ignore
        await area.addCamera(camera);
        await area.save();
        return area
    }
}