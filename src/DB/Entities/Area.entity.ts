import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Radar } from "./Radar.enity";
import { Camera } from "./Camera.entity";
import {Cordinator} from "./cordinator";


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

    @Column
    geoJson: Cordinator[];

}

