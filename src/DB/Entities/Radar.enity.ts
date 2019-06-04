import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';
import {ActiveStatus} from "./Enums/ActiveStatus";


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
}