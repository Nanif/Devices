import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';
import {ActiveStatus} from "./Enums/ActiveStatus";


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
}