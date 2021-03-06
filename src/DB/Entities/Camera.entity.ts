import {Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {ActiveStatus} from "../../Models/Enums/ActiveStatus";
import {Place} from "./Place.entity";
import {Area} from "./Area.entity";


@Table
export class Camera extends Model<Camera> {

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

    @Column
    @ForeignKey(() => Place)
    placeId: string;

    @ForeignKey(() => Area)
    @Column
    areaId: number;

    @BelongsTo(() => Area)
    area: Area;
}