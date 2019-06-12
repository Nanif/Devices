import {Column, Unique} from "sequelize-typescript";

export class UserLoginRequestDto {
    token: string;
    email: string
}