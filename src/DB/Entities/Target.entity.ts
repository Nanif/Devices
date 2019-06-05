
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { ActiveStatus }from '../../Models/Enums/ActiveStatus'
import { Radar }from './Radar.entity'

@Table
export class Target extends Model<Target> {

    @Column
    description: string;

    @Column
    title: string;

    @Column
    status: ActiveStatus;

    @Column
    @ForeignKey(() => Radar)
    radarId: number
}



