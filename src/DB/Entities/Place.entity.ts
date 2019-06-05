import {Table, Column, Model, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import {Radar} from "./Radar.entity";
import {Camera} from "./Camera.entity";
import {Cordinator} from "../../Models/cordinator";
import * as sequelize from "sequelize";


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

    @Column({
        get: function () {
            return JSON.parse(this.getDataValue('value'));
        },
        set: function (value: Cordinator[]) {
            this.setDataValue('value', JSON.stringify(value));
        }
    })
    geoJson: string;

}


