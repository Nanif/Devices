import {Table, Column, Model, ForeignKey, HasMany} from 'sequelize-typescript';
import {Radar} from "./Radar.entity";
import {Camera} from "./Camera.entity";
import {Cordinator} from "../../Models/cordinator";
import {type} from "os";
import {DataType} from "sequelize-typescript";


@Table
export class Area extends Model<Area> {

    @Column
    title: string;

    @Column
    description: string;

    @Column(DataType.TEXT)
    get geoJson(): Cordinator[] {
        if(this.getDataValue('value')) {
            return JSON.parse(this.getDataValue('value'));
        }
        return null;
    }
    set geoJson(value: Cordinator[]) {
        if(value) {
            this.setDataValue('geoJson', JSON.stringify(value));
        }
        else {
            this.setDataValue('geoJson', value);
        }
    }‏
    // geoJson: string;

    @HasMany(() => Camera)
    cameras: Camera[];

    @HasMany(() => Radar)
    radars: Radar[];

}

