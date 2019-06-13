import {Column, Unique} from "sequelize-typescript";

export class UserLoginRequestDto {
    password: string;
    email: string
}