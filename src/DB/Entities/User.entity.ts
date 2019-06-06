import {Table, Column, Model, Unique, HasMany, BelongsToMany, PrimaryKey, AutoIncrement} from 'sequelize-typescript';
import { Roles }from '../../Models/Enums/Roles'
import {Permission} from "./Permission.entity";
import {UsersPermissions} from "./UsersPermissions.entity";

@Table
export class User extends Model<User> {
    @Column
    name: string;

    @Column
    password: string;

    @Unique
    @Column
    email: string;

    @Column
    role: Roles;

    @BelongsToMany(() => Permission, () => UsersPermissions)
    permissions: Permission[];
}


// name,password,email,role(superAdmin,admin,regular)

