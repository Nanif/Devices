import {ActiveStatus} from "../Models/Enums/ActiveStatus";

export class CreateTargetRequestDto {
    description: string;

    title: string;

    status: ActiveStatus;

    radarId: number
    
}