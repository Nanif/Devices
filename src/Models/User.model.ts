import {Permission} from "../DB/Entities/Permission.entity";
import {Roles} from "./Enums/Roles";

export class UserModel {
    name: string;
    password: string;
    email: string;
    role: Roles;
    permissions?: Permission[]
}