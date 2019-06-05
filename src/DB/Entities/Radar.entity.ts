import { Table, Column, Model, PrimaryKey, BelongsTo, ForeignKey } from 'sequelize-typescript';
import {ActiveStatus} from "../../Models/Enums/ActiveStatus";
import {Area} from "./Area.entity"
import {Place} from "./Place.entity"

@Table
export class Radar extends Model<Radar> {

    @Column
    title: string;

    @Column
    description: string;

    @Column
    ip: string;

    @Column
    port: string;

    @Column
    status: ActiveStatus;

    @ForeignKey(() => Area)
    @Column
    areaId: number;

    @BelongsTo(() => Area)
    area: Area;

    @Column
    @ForeignKey(() => Place)
    placeId: string;
}