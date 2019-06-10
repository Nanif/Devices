import {CameraModel} from "./Camera.model";
import {RadarModel} from "./Radar.model";
import {Area} from "../DB/Entities/Area.entity";


export  class AreaModel {
    id?: number;
    title: string;
    description: string;
    geoJson?: string;
    cameras?: CameraModel[];
    radars?: RadarModel[];
    constructor() {}

    static transformFromEntityToModel(area:Area){
        console.log('##########################################',area);
        const areaJson = area.dataValues;
        console.log('areaJson',areaJson);
        const areaModel:AreaModel = {
            title:areaJson.title,
            description:areaJson.title,
            geoJson:areaJson.geoJson || '',
            cameras:areaJson.cameras|| [],
            radars:areaJson.cameras|| [],
        };
        console.log('areaModel',areaModel);
        return areaModel
    }
}