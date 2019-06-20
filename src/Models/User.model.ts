import {Permission} from "../DB/Entities/Permission.entity";
import {Roles} from "./Enums/Roles";
import {prop} from 'typegoose'


export class UserModel {
    @prop({maxlength: [30,'too long name']})
    name?: string;

    email: string;

    @prop({required: [true, 'password is required']})
    password: string;

    role?: Roles;

    permissions?: Permission[]
}