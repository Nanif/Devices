import {ActiveStatus} from "./Enums/ActiveStatus";
import {AreaModel} from "./Area.model";

export class CameraModel {
    title: string;
    description: string;
    ip: string;
    port: string;
    status: ActiveStatus;
    placeId: string;
    areaId: number;
    area: AreaModel;

    constructor(title, description, ip, port, status, placeId, areaId) {
        this.title = title;
        this.description = description;
        this.ip = ip;
        this.port = port;
        this.status = status;
        this.placeId = placeId;
        this.areaId = areaId;
    }
}