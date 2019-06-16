import {ActiveStatus} from "./Enums/ActiveStatus";
import {Area} from "../DB/Entities/Area.entity";
import {Target} from "../DB/Entities/Target.entity";


export class TargetModel {
    description: string;
    title: string;
    status: ActiveStatus;
    radarId: number

    static transformFromEntityToModel(target: Target): TargetModel{
        const areaJson = target.toJSON();
        const targetModel: TargetModel = {
            description: target.description,
            title: target.title,
            status: target.status,
            radarId: target.radarId
        };
        return targetModel
    }
}