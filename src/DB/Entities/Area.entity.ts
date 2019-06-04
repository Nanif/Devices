
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Radar } from "./Radar.enity";
import { Camera } from "./Camera.entity";


@Table
export class Area extends Model<Area> {

    @Column
    title: string;

    @Column
    description: string;

    @Column
    @ForeignKey(() => Radar)
    radarId: string;

    @Column
    @ForeignKey(() => Camera)
    cameraId: string;

}
// - coordinate geojson[](lang,lat array),title,desciption - has radars and cameras
