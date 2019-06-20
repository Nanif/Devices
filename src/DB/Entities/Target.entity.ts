import {Table, Column, Model, ForeignKey, DataType} from 'sequelize-typescript';
import { ActiveStatus }from '../../Models/Enums/ActiveStatus'
import { Radar }from './Radar.entity'

@Table
export class Target extends Model<Target> {

    @Column
    description: string;

    @Column
    title: string;

    @Column(DataType.TEXT)
    get status(): ActiveStatus {
        if(this.getDataValue('value')) {
            return JSON.parse(this.getDataValue('value'));
        }
        return null;
    }
    set status(value: ActiveStatus) {
        if(value) {
            this.setDataValue('status', JSON.stringify(value));
        }
        else {
            this.setDataValue('status', value);
        }
    }‏

    // @Column
    // status: ActiveStatus;

    @Column
    @ForeignKey(() => Radar)
    radarId: number
}



