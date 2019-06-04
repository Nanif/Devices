import {Table, Column, Model, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import {ActiveStatus} from "./Enums/ActiveStatus";
import {Radar} from "./Radar.enity";
import {Camera} from "./Camera.entity";
import {Cordinator} from "./cordinator";



@Table
export class Place extends Model<Place> {

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
    position: Cordinator;
}


