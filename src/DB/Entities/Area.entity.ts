import {Table, Column, Model, ForeignKey, HasMany} from 'sequelize-typescript';
import {Radar} from "./Radar.entity";
import {Camera} from "./Camera.entity";
import {Cordinator} from "../../Models/cordinator";


@Table
export class Area extends Model<Area> {

    @Column
    title: string;

    @Column
    description: string;

    @Column({
        get: function () {
            return JSON.parse(this.getDataValue('value'));
        },
        set: function (value: Cordinator) {
            this.setDataValue('value', JSON.stringify(value));
        }
    })
    geoJson: string;

    @HasMany(() => Camera)
    cameras: Camera[];

    @HasMany(() => Radar)
    radars: Radar[];

}

