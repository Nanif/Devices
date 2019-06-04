import { Table, Column, Model, Unique } from 'sequelize-typescript';
import { Roles }from './Enums/Roles'
@Table
export class Radar extends Model<Radar> {
    @Column
    name: string;

    @Column
    password: string;

    @Column
    @Unique
    email: string;

    @Column
    role: Roles;
}


// name,password,email,role(superAdmin,admin,regular)

