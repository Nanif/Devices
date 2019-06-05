import {Inject, Injectable} from "@nestjs/common";
import {User} from "src/DB/Entities/User.entity";

@Injectable()
export class UserService {
    constructor(@Inject('Users_REPOSITORY') private readonly Users_REPOSITORY: typeof User) {}
}