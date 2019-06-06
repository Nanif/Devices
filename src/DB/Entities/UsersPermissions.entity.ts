import {Table, Column, Model, ForeignKey, PrimaryKey} from 'sequelize-typescript';
import { Permission }from './Permission.entity'
import { User } from './User.entity'

@Table
export class UsersPermissions extends Model<UsersPermissions> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Permission)
    @Column
    permissionId: number;

}
