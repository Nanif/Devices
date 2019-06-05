import {Table, Column, Model, Unique, HasMany, BelongsToMany, PrimaryKey} from 'sequelize-typescript';
import {UsersPermissions}from './UsersPermissions.entity'
import {User} from './User.entity'
import {Camera} from "./Camera.entity";

@Table
export class Permission extends Model<Permission> {
    @Column
    type: string;

    @PrimaryKey
    @Column
    id: number;

    @BelongsToMany(() => User, () => UsersPermissions)
    users: User[];
}

// name,password,email,role(superAdmin,admin,regular)

