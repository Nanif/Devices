import {CameraModel} from "../Models/Camera.model";
import {RadarModel} from "../Models/Radar.model";

export  class CreateAreaDto {
    title: string;

    description: string;

    cameras:CameraModel[];

    radars: RadarModel[];

    geoJson: string;
}