
export class registerDto {

    password: string;
    email: string;
    name: string

    constructor(password, email, name) {
        this.password = password;
        this.email = email;
        this.name = name;
    }
}
