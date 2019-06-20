import {CameraModel} from "./Camera.model";
import {RadarModel} from "./Radar.model";
import {Area} from "../DB/Entities/Area.entity";
import {Cordinator} from "./cordinator";


export  class AreaModel {
    id?: number;
    title?: string;
    description?: string;
    geoJson?: Cordinator[];
    cameras?: CameraModel[];
    radars?: RadarModel[];
    constructor() {}

    static transformFromEntityToModel(area:Area){
        const areaJson = area.dataValues;
        const areaModel:AreaModel = {
            title: areaJson.title,
            description: areaJson.title,
            geoJson: areaJson.geoJson || [],
            cameras: areaJson.cameras|| [],
            radars: areaJson.cameras || [],
        };
        return areaModel
    }
}