import {Column, Unique} from "sequelize-typescript";

export class getUserRequestDto {
    password: string;

    email: string;
}