import {CameraModel} from "../Models/Camera.model";
import {RadarModel} from "../Models/Radar.model";
import {Cordinator} from "../Models/cordinator";

export  class UpdateAreaRequestDto {
    id?: number;

    title: string;

    description: string;

    cameras:CameraModel[];

    radars: RadarModel[];

    geoJson: Cordinator[];
}