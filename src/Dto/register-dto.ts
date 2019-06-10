import {Roles} from "../Models/Enums/Roles";

export class registerDto {

    password: string;
    email: string;
    name: string
    role: Roles; // what type? string or Roles

    constructor(password, email, name) {
        this.password = password;
        this.email = email;
        this.name = name;
    }
}
