import {ActiveStatus} from "./Enums/ActiveStatus";
import {AreaModel} from "./Area.model";

export class RadarModel {
    title: string;
    description: string;
    ip: string;
    port: string;
    status: ActiveStatus;
    areaId: number;
    area: AreaModel;
    placeId: string;
}